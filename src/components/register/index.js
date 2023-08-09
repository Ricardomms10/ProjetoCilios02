import { Container, Confirmacao, Cadastro, ConBtn, BtnCad } from "../register/styled"




const Register = () => {

  




    return (

        <Container>
            <Confirmacao>
                <h3>Já tenho cadastro</h3>

                <form>
                    <div>
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder="E-mail" id="email" />
                    </div>

                    <div>
                        
                        <i class="fa-solid fa-key"></i>
                        <input type="password" placeholder="Senha" />
                    </div>

                    <ConBtn>
                        <a href="os">Esqueci a senha</a>
                        <button> Entrar</button>
                    </ConBtn>

                </form>

            </Confirmacao>



            <Cadastro>
                <h3>Quero cadastrar</h3>
                <form>
                    <div>
                        <i class="fa-solid fa-user"></i>
                        <input placeholder="Nome Completo" />
                    </div>

                    <div>
                        <i class="fa-solid fa-tablet-screen-button"></i>
                        <input placeholder="Telefone" />
                    </div>

                    <div>
                        <i class="fa-solid fa-envelope"></i>
                        <input placeholder="E-mail" />
                    </div>

                    <div>
                        <i class="fa-solid fa-key"></i>
                        <input placeholder="Senha" />
                    </div>


                    <div>
                        <i class="fa-solid fa-rotate-right"></i>
                        <input placeholder="Confirmar a senha" />
                    </div>


                    <BtnCad>
                        <button> Cadastar </button>
                    </BtnCad>

                </form>
            </Cadastro>
        </Container>
    )
}

export { Register }