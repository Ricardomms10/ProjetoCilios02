const express = require("express");
const session = require('express-session');
const app = express();
const mysql = require("mysql");
const cors = require('cors');
const jwt = require('jsonwebtoken');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "banco",
});

app.use(express.json());
app.use(cors());

app.use(session({
    secret: '7808',
    resave: false,
    saveUninitialized: true
}));

function generateToken(userData) {
    const secretKey = 'suaChaveSecreta'; // Substitua pela sua chave secreta
    return jwt.sign(userData, secretKey, { expiresIn: '1h' }); // Define um tempo de expiração de 1 hora
}
const apiUrl = process.env.REACT_APP_API;

app.post("/register", (req, res) => {
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email = ?", [email],
        (err, result) => {
            if (err) {
                res.send(err);
            }
            if (result.length === 0) {
                db.query("INSERT INTO usuarios (nome, telefone, email, password) VALUES (?, ?, ?, ?)", [nome, telefone, email, password], (err, response) => {
                    if (err) {
                        res.send(err);
                    }
                    res.send({ msg: "Cadastrado com sucesso" });
                }
                );
            } else {
                res.send({ msg: "usuario já cadastrado" });
            }
        });
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email = ? AND password = ?", [email, password], (err, result) => {
        if (err) {
            res.status(500).send({ error: "Erro interno no servidor" });
            return;
        }
        if (result.length > 0) {
            req.session.isAuthenticated = true;
            const userData = {
                nome: result[0].nome,
                email: result[0].email,
                telefone: result[0].telefone,
                password: result[0].password,
            };
            req.session.userData = userData;
            console.log(userData);
            res.status(200).send({ isAuthenticated: true, userData });
        } else {
            res.status(401).send({ isAuthenticated: false, msg: "Conta não encontrada" });
        }
    });
});


app.get("/verificar-autenticacao", (req, res) => {
    if (req.session.isAuthenticated) {
        // O usuário está autenticado
        res.json({ isAuthenticated: true });
    } else {
        // O usuário não está autenticado
        res.json({ isAuthenticated: false });
    }
});



app.listen(3001, () => {
    console.log("Rodando na porta 3001")
});