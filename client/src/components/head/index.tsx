import React from "react"
import Cilios from "../../assets/images/cilios.png"
import { Contend } from "./styled"
import { useContext } from "react"
import { TokenContext } from "../../hooks/Token"
import { useNavigate } from "react-router-dom"

const Head = () => {
    const auth = useContext(TokenContext);
    const navegate = useNavigate();

    const handleLogout = async () => {
        await auth.signout();
        navegate('/');
    };

    return (
        <Contend>

            <img alt={'Imagem de cílios'} src={Cilios} />

            {auth.user ? (
                <span>
                    {auth.user.nome}
                    <button onClick={handleLogout} ><i className="fa-solid fa-power-off"></i></button>
                </span>
            ) : (
                <a href="login">Cadastrar ou entrar</a>
            )}
        </Contend>
    )
}

export { Head }
