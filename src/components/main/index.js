/* eslint-disable jsx-a11y/iframe-has-title */
import Olho from "../../images/olho.png"
import { ImgOlho, Principal, Maps, Text, Container, Servico, Apresenta } from "./styled"
import { useNavigate } from "react-router-dom";

const Main = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        // eslint-disable-next-line no-restricted-globals
        const divElement = event.target.closest('div');
        const trabalho =divElement.querySelector('h1').textContent;
        const preco = divElement.querySelector('h3').textContent;
      
        
        navigate(`/agenda/${trabalho}/${preco}`);
      };
   

    

    return (
        <Container>
            <ImgOlho>
                <img alt="olho com texto" src={Olho} />
            </ImgOlho>

            <Principal>
                <span>
                    <p>Michele Crepaldi </p>
                    <h2> Extencionista de Cilios </h2>
                </span>

                <ul>
                    <li>Lash Deseigner</li>
                    <li>Transformando Olhares</li>
                    <li>Fio a fio / Volumes</li>
                </ul>

            </Principal>

            <Apresenta>
                <p>
                    Seja bem-vinda ao universo encantador dos cílios! Aqui, você encontrará uma profissional dedicada,
                    apaixonada por realçar a beleza e elevar a autoestima de cada cliente. Sou a Michele Crepaldi, uma extencionista de
                    cílios especializada em Lash Design, e estou
                    comprometida em oferecer resultados deslumbrantes e uma experiência única a todos que cruzam o meu caminho.
                    <br />
                    Agende seu horário hoje mesmo e permita-me transformar seus olhares em verdadeiras obras de arte!
                    <br />
                    <br />
                    Lembre-se: "A beleza começa no momento em que você decide ser você mesma!" - Coco Chanel

                </p>

            </Apresenta>




            <Text>
                <h1>Todos os serviços</h1>


                <Servico>
                    <div>
                        <h1 >Aplicação Clássico </h1>
                        <p>2h</p>
                        <h3 >R$ 130</h3>
           <button onClick={handleClick}>Agendar</button>
                    </div>

                    <div data-title="Aplicação Brasileiro" data-value="R$ 170">
                        <h1> Aplicação Brasileiro </h1>
                        <p>2h</p>
                        <h3>R$ 170</h3>
           <button onClick={handleClick}>Agendar</button>
                    </div>

                    <div>
                        <h1> Capping </h1>
                        <p> 2h à 3h </p>
                        <h3> R$ 200</h3>

           <button onClick={handleClick}>Agendar</button>
                    </div>

                    <div>
                        <h1> Manutenção Clássico </h1>
                        <p>de 15 dias</p>

                        <h3> R$70</h3>

           <button onClick={handleClick}>Agendar</button>
                    </div>

                    <div>
                        <h1> Manutenção Clássico </h1>
                        <p>de 15 dias</p>

                        <h3> R$90 </h3>

           <button onClick={handleClick}>Agendar</button>
                    </div>

                    <div>
                        <h1> Manunt. Brasileiro </h1>
                        <p>de 15 dias </p>

                        <h3> R$ 85</h3>
           <button onClick={handleClick}>Agendar</button>
                    </div>

                    <div>
                        <h1> Manunt. Brasileiro </h1>
                        <p>de 21 dias </p>

                        <h3> R$ 100 </h3>

           <button onClick={handleClick}>Agendar</button>
                    </div>
                </Servico>



            </Text>

            <div>
                <Maps>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.979355985825!2d-46.422908625324595!3d-23.99650607772157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1c3806954b61%3A0x4338f2322f1f44f4!2sAv.%20Marquesa%20de%20Santos%2C%20407%20-%20S%C3%ADtio%20do%20Campo%2C%20Praia%20Grande%20-%20SP%2C%2011725-050!5e0!3m2!1spt-BR!2sbr!4v1691089223908!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                </Maps>

            </div>





        </Container>
    )
}

export { Main }