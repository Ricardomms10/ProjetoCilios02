import React from "react"
import Cilios from "../../images/cilios.png"
import { Contend } from "./styled"
import { useContext } from "react"
import { TokenContext } from "../../contexts/Token"

const Head = () => {
    const auth = useContext(TokenContext);

    const handleLogout = () => {

    };

    return (
        <Contend>
            
                <img alt={'Imagem de cílios'} src={Cilios} />
            
            {auth.user ? (
                <span>
                    Bem-vinda(o), {auth.user.nome}!
                    <button onClick={handleLogout} ><i className="fa-solid fa-power-off"></i></button>
                </span>

            ) : (
                <a href="login">Cadastrar ou entrar</a>
            )}
        </Contend>
    )
}

export { Head }
