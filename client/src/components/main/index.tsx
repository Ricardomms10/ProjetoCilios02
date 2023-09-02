/* eslint-disable jsx-a11y/iframe-has-title */
import Olho from "../../images/olho.png";
import {
    Boxbtn,
    ServicoBox,
    ImgOlho,
    Principal,
    Maps,
    Text,
    Container,
    Servico,
    Apresenta,
    Container2,
} from "./styled";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Main = () => {
    const Servicos = [
        {
            title: "Aplicação Clássico",
            duration: "2h",
            price: "R$ 130",
        },
        {
            title: "Aplicação Brasileiro",
            duration: "2h",
            price: "R$ 170",
        },
        {
            title: "Capping",
            duration: "2h à 3h",
            price: "R$ 200",
        },
        {
            title: "Manutenção Clássico",
            duration: "de 15 dias",
            price: "R$ 70",
        },
        {
            title: "Manutenção Clássico",
            duration: "de 15 dias",
            price: "R$ 90",
        },
        {
            title: "Manunt. Brasileiro",
            duration: "de 15 dias",
            price: "R$ 85",
        },
        {
            title: "Manunt. Brasileiro",
            duration: "de 21 dias",
            price: "R$ 100",
        },
    ];

    const navigate = useNavigate();

    const handleDivClick = (event: { currentTarget: any; }) => {
        const divElement = event.currentTarget;
        const trabalhoElement = divElement.querySelector("h1");
        const precoElement = divElement.querySelector("h3");

        if (trabalhoElement && precoElement) {
            const trabalho = trabalhoElement.textContent;
            const preco = precoElement.textContent;

            navigate(`/agenda/${trabalho}/${preco}`);
        }
    };

    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        if (startIndex < Servicos.length - 2) {
            setStartIndex(startIndex + 2);
        }
    };

    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 2);
        }
    };

    return (
        <Container>
            <ImgOlho>
                <img alt="olho com texto" src={Olho} />
            </ImgOlho>

            <Principal>
                <span>
                    <p>Michele Crepaldi</p>
                    <h2>Extencionista de Cílios</h2>
                </span>

                <ul>
                    <li>Lash Designer</li>
                    <li>Transformando Olhares</li>
                    <li>Fio a Fio / Volumes</li>
                </ul>
            </Principal>

            <Apresenta>
                <p>
                    Seja bem-vinda ao universo encantador dos cílios! Aqui, você
                    encontrará uma profissional dedicada, apaixonada por realçar a
                    beleza e elevar a autoestima de cada cliente. Sou a Michele Crepaldi,
                    uma extensionista de cílios especializada em Lash Design, e estou
                    comprometida em oferecer resultados deslumbrantes e uma experiência
                    única a todos que cruzam o meu caminho.
                    <br />
                    Agende seu horário hoje mesmo e permita-me transformar seus olhares
                    em verdadeiras obras de arte!
                    <br />
                    <br />
                    Lembre-se: "A beleza começa no momento em que você decide ser você
                    mesma!" - Coco Chanel
                </p>
            </Apresenta>

            <Container2>
                <Text>
                    <h1>Todos os serviços</h1>
                </Text>
                <Servico>
                    {Servicos.slice(startIndex, startIndex + 2).map((servico, index) => (
                        <ServicoBox key={index} onClick={handleDivClick}>
                            <h1>{servico.title}</h1>
                            <p>{servico.duration}</p>
                            <h3>{servico.price}</h3>
                            <button>Agendar</button>
                        </ServicoBox>
                    ))}
                </Servico>

                <Boxbtn>
                    <button onClick={handlePrevious} disabled={startIndex === 0}>
                        <i className="fa-solid fa-angles-left"></i>
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={startIndex >= Servicos.length - 2}
                    >
                        <i className="fa-solid fa-angles-right"></i>
                    </button>
                </Boxbtn>
            </Container2>
            ;

            <div>
                <Maps>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.979355985825!2d-46.422908625324595!3d-23.99650607772157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1c3806954b61%3A0x4338f2322f1f44f4!2sAv.%20Marquesa%20de%20Santos%2C%20407%20-%20S%C3%ADtio%20do%20Campo%2C%20Praia%20Grande%20-%20SP%2C%2011725-050!5e0!3m2!1spt-BR!2sbr!4v1691089223908!5m2!1spt-BR!2sbr"
                        width="600"
                        height="450"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Maps>
            </div>
        </Container>
    );
};

export { Main };
