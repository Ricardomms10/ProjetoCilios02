
import { useParams } from 'react-router-dom';
import { Container, Horario, Calendario, Confirma, DivBtn, MessagemConf } from "./styled";
import React, { useState, useContext } from 'react';
import { Head } from '../../components/head/index';
import { TokenContext } from '../../contexts/Token';
import emailjs from '@emailjs/browser'


const Agenda = () => {
    const { trabalho, preco } = useParams();
    const [selectedDate, setSelectedDate] = useState('');
    const [showConfirma, setShowConfirma] = useState(false);
    const [horarioSelecionado, setHorarioSelecionado] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const auth = useContext(TokenContext);

    const handleTimeSelection = (time) => {
        setHorarioSelecionado(time);
        setShowConfirma(true);
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const formatDate = (dateString) => {
        if (!dateString) {
            return '';
        }

        const localDate = new Date(`${dateString}T00:00:00`);
        const day = localDate.getDate().toString().padStart(2, '0');
        const month = (localDate.getMonth() + 1).toString().padStart(2, '0');
        const year = localDate.getFullYear();
        return `${day}-${month}-${year}`;
    };


    const confirmarHorario = () => {
        // Atualiza a mensagem de confirmação
        setConfirmationMessage(`Seu horário foi confirmado com sucesso.`);

        // Esconde a confirmação após um atraso de 2 segundos
        setTimeout(() => {
            setShowConfirma(false); // Define showConfirma como false para removê-lo da tela
            setConfirmationMessage('');
        }, 3000);

        const templateparams = {
            from_name: auth.user.nome,
            trabalho: trabalho,
            data: formatDate(selectedDate),
            horario:horarioSelecionado,
            telefone:auth.user.telefone
        }

        emailjs.send("service_zsesqi4", "template_1kglvay", templateparams, "5oqBrnbndvRwAVxSx")
        .then((response) =>{
            console.log("EMAIL ENVIADO", response.status, response.text)
        }, (err) => {
            console.log("ERRO: ", err)
        })
    };


    return (
        <>
            < Head />
            <Container>
                <h4>Serviço:</h4>
                <br />
                <h2>{trabalho}</h2>
                <p>{preco}</p>
            </Container>

            <Calendario>
                <h1>Escolha o dia:</h1>
                <div>
                    <label htmlFor="datePicker">Selecione uma data:</label>
                    <input
                        type="date"
                        id="datePicker"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                    <p>Data selecionada: {formatDate(selectedDate)}</p>
                </div>
            </Calendario>

            <Horario>
                <h4>Escolha o Horário:</h4>
                <ul>
                    <li><button onClick={() => handleTimeSelection("10:00")}>10:00</button> </li>
                    <li><button onClick={() => handleTimeSelection("12:00")}>12:00</button> </li>
                    <li><button onClick={() => handleTimeSelection("14:00")}>14:00</button> </li>
                    <li><button onClick={() => handleTimeSelection("16:00")}>16:00</button> </li>
                    <li><button onClick={() => handleTimeSelection("18:00")}>18:00</button> </li>
                    <li><button onClick={() => handleTimeSelection("20:00")}>20:00</button> </li>
                    <li><button onClick={() => handleTimeSelection("21:00")}>21:00</button> </li>
                </ul>
            </Horario>

            {showConfirma && (
                <Confirma>
                    <div>
                        <h2>Confirme o Agendamento:</h2>
                        <p>Serviço: {trabalho}</p>
                        <p>Preço: {preco}</p>
                        <p>Data: {formatDate(selectedDate)}</p>

                        <DivBtn>
                            <button onClick={() => setShowConfirma(false)}>Cancelar</button>
                            <button onClick={confirmarHorario}> Confirmar </button>
                        </DivBtn>
                    </div>
                </Confirma>
            )};

            {confirmationMessage && (
                <MessagemConf>
                    <div>
                        <p>{confirmationMessage}</p>
                    </div>
                </MessagemConf>
            )

            }
        </>
    );
}

export { Agenda };



