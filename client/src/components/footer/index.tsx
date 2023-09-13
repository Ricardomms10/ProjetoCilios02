import React from "react"
import { Container, Contato, Links, } from "./styled"

const Footer = () => {

    return (
        <Container>
            <Contato>
                <h2>Contato</h2>
                <ul>
                    <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <h3>Endereço:
                            <br />
                            Rua: Av. Marquesa de Santos, 407 Tude Bastos - Praia Grande - SP
                        </h3>
                    </li>

                    <li>
                        <i className="fa-solid fa-phone"></i>
                        <h3>Celular: <br />
                            (13) 98874-2228
                        </h3>
                    </li>
                </ul>
            </Contato>

            <Links>
                <h2>Links</h2>
                <div>
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </Links>
        </Container>
    )
}

export { Footer }