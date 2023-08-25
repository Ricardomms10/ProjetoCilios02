import { Container, Confirmacao, Cadastro, ConBtn, BtnCad } from "../register/styled"
import * as yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"


const Register = () => {

    const handClickRegister = (values) => console.log(values);

    const handClickLogin = (values) => console.log(values);


    const validationLogin = yup.object().shape({
        email: yup
            .string()
            .email("Não é um email")
            .required("Este campo é obrigatório"),
        password: yup
            .string()
            .min(4, "A senha deve ter 4 Caracteres")
            .required("Este campo é obrigatório"),
    });


    const validationRegister = yup.object().shape({
        nome: yup
            .string()
            .required("Este campo é obrigatório."),
        email: yup
            .string()
            .email("Não é um email")
            .required("Este campo é obrigatório"),
        telefone: yup
            .number()
            .min(11, "Numero Incompleto")
            .required("Este campo é obrigatorio"),
        password: yup
            .string()
            .min(4, "A senha deve ter 4 Caracteres")
            .required("Este campo é obrigatório"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "As senhas não são iguais"),
    });

    return (

        <Container>
            <Confirmacao>
                <h3>Já tenho cadastro</h3>

                <Formik
                    initialValues={{}}
                    onSubmit={handClickLogin}
                    validationSchema={validationLogin}

                >

                    <Form>

                        <div>
                            <i className="fa-solid fa-user"></i>
                            <Field name="email" placeholder="E-mail" className="input" />

                            <ErrorMessage
                                component="span"
                                name="email"
                                className="form-error"
                            />
                        </div>

                        <div>

                            <i className="fa-solid fa-key"></i>
                            <Field name="password" placeholder="Senha" className="input" />

                            <ErrorMessage
                                component="span"
                                name="password"
                                className="form-error"
                            />
                        </div>

                        <ConBtn>
                            <a href="os">Esqueci a senha</a>
                            <button
                                type="submit"
                                validationSchema={validationLogin}
                            > Entrar</button>
                        </ConBtn>

                    </Form>

                </Formik>

            </Confirmacao>



            <Cadastro>
                <h3>Quero cadastrar</h3>

                <Formik
                    initialValues={{}}
                    onSubmit={handClickRegister}
                    validationSchema={validationRegister}

                >
                    <Form className="form" >
                        <div>
                            <i className="fa-solid fa-user"></i>
                            <Field name="nome" placeholder="Nome Completo" className="input" />

                            <ErrorMessage
                                component="span"
                                name="nome"
                                className="form-error"
                            />
                        </div>

                        <div>
                            <i className="fa-solid fa-tablet-screen-button"></i>
                            <Field name="telefone" placeholder="Telefone" className="input" />

                            <ErrorMessage
                                component="span"
                                name="telefone"
                                className="form-error"
                            />
                        </div>

                        <div>
                            <i className="fa-solid fa-user"></i>
                            <Field name="email" placeholder="E-mail" className="input" />

                            <ErrorMessage
                                component="span"
                                name="email"
                                className="form-error"
                            />
                        </div>

                        <div>

                            <i className="fa-solid fa-key"></i>
                            <Field name="password" placeholder="Senha" className="input" />

                            <ErrorMessage
                                component="span"
                                name="password"
                                className="form-error"
                            />
                        </div>


                        <div>
                            <i className="fa-solid fa-rotate-right"></i>
                            <Field name="confirmPassword" placeholder="Confirme sua Senha" className="input" />

                            <ErrorMessage
                                component="span"
                                name="confirmPassword"
                                className="form-error"
                            />
                        </div>


                        <BtnCad>
                            <button
                                type="submit"
                                validationSchema={validationRegister}
                            > Cadastar </button>
                        </BtnCad>

                    </Form>


                </Formik>

            </Cadastro>



        </Container>
    )
}

export { Register }