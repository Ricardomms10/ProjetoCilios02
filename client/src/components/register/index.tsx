import {
    Container,
    Confirmacao,
    Cadastro,
    ConBtn,
    ErrorWrapper

} from "../register/styled";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useApi } from "../../hooks/userApi";


const Register = () => {

    const api = useApi();
    const navigate = useNavigate();

    const handClickRegister = (values: { nome: string; telefone: string; email: string; password: string; }) => {
        Axios.post("http://localhost:3001/register", {
            nome: values.nome,
            telefone: values.telefone,
            email: values.email,
            password: values.password,
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("Erro na solicitação:", error);
            });
    };

    const handClickLogin = async (values: { email: string; password: string; }) => {
        const { email, password } = values;
        if (email && password) {
            try {
                // Chame a função signin da sua useApi
                const loginResult = await api.signin(email, password);
                console.log(loginResult, "tome");
                if (loginResult.isAuthenticated) {
                    var userapiJSON = JSON.stringify(loginResult.userData);
                    localStorage.setItem("authUser", userapiJSON);
                    // Autenticação bem-sucedida, redirecione ou faça outras ações.
                    navigate(`/`);
                } else {
                    // Autenticação falhou, exiba uma mensagem de erro.
                    alert('Falha na autenticação');
                }
            } catch (error) {
                // Trate erros de solicitação, como erro 404, erro de rede, etc.
                console.error('Erro ao fazer login:', error);
            }
        }
    };

    const validationLogin = yup.object().shape({
        email: yup.string().email("Não é um email").required("Este campo é obrigatório"),
        password: yup.string().min(4, "A senha deve ter 4 caracteres").required("Este campo é obrigatório"),
    });

    const validationRegister = yup.object().shape({
        nome: yup.string().required("Este campo é obrigatório."),
        email: yup.string().email("Não é um email").required("Este campo é obrigatório"),
        telefone: yup
            .string()
            .matches(/^\d+$/, "Telefone deve conter apenas números")
            .min(11, "Número de telefone inválido")
            .required("Este campo é obrigatório"),
        password: yup.string().min(4, "A senha deve ter 4 caracteres").required("Este campo é obrigatório"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "As senhas não coincidem")
            .required("Este campo é obrigatório"),
    });

    return (
        <Container>
            <Confirmacao>
                <h3>Já tenho cadastro</h3>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={handClickLogin}
                    validationSchema={validationLogin}
                >
                    <Form>
                        <div>
                            <i className="fa-solid fa-user"></i>
                            <Field name="email" type="email" placeholder="E-mail" className="input" />
                            <ErrorWrapper>
                                <ErrorMessage
                                    component="span"
                                    name="email"
                                    className="form-error"
                                />
                            </ErrorWrapper>
                        </div>
                        <div>
                            <i className="fa-solid fa-key"></i>
                            <Field name="password" type="password" placeholder="Senha" className="input" />
                            <ErrorWrapper>
                                <ErrorMessage
                                    component="span"
                                    name="password"
                                    className="form-error"
                                />
                            </ErrorWrapper>
                        </div>
                        <ConBtn>
                            <a href="os">Esqueci a senha</a>
                            <button type="submit">Entrar</button>
                        </ConBtn>
                    </Form>
                </Formik>
            </Confirmacao>
            <Cadastro>
                <h3>Quero cadastrar</h3>
                <Formik
                    initialValues={{
                        nome: "",
                        email: "",
                        telefone: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    onSubmit={handClickRegister}
                    validationSchema={validationRegister}
                >
                    <Form className="form">
                        <div>
                            <i className="fa-solid fa-user"></i>
                            <Field name="nome" placeholder="Nome Completo" className="input" />
                            <ErrorWrapper>
                                <ErrorMessage
                                    component="span"
                                    name="nome"
                                    className="form-error"
                                />
                            </ErrorWrapper>
                        </div>
                        <div>
                            <i className="fa-solid fa-tablet-screen-button"></i>
                            <Field name="telefone" placeholder="Telefone" className="input" />
                            <ErrorWrapper>
                                <ErrorMessage
                                    component="span"
                                    name="telefone"
                                    className="form-error"
                                />
                            </ErrorWrapper>
                        </div>
                        <div>
                            <i className="fa-solid fa-user"></i>
                            <Field name="email" type="email" placeholder="E-mail" className="input" />
                            <ErrorWrapper>
                                <ErrorMessage
                                    component="span"
                                    name="email"
                                    className="form-error"
                                />
                            </ErrorWrapper>
                        </div>
                        <div>
                            <i className="fa-solid fa-key"></i>
                            <Field name="password" type="password" placeholder="Senha" className="input" />
                            <ErrorWrapper>
                                <ErrorMessage
                                    component="span"
                                    name="password"
                                    className="form-error"
                                />
                            </ErrorWrapper>
                        </div>
                        <div>
                            <i className="fa-solid fa-rotate-right"></i>
                            <Field name="confirmPassword" type="password" placeholder="Confirme sua Senha" className="input" />
                            <ErrorWrapper>
                                <ErrorMessage
                                    component="span"
                                    name="confirmPassword"
                                    className="form-error"
                                />
                            </ErrorWrapper>
                        </div>
                        
                            <button type="submit">Cadastrar</button>
                        
                    </Form>
                </Formik>
            </Cadastro>
        </Container>
    );
};

export { Register };

