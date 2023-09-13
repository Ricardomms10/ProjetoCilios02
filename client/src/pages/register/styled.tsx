import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;


  @media (max-width: 900px) {
    flex-direction: column;
    margin:10px;
  }
`;

export const Confirmacao = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    padding: 15px;
    max-height: 400px; /* Alterei para max-height para torná-lo responsivo */
    width: 350px;
    border-radius: 10px;
    flex-wrap: nowrap;

h3 {
    font-size: 24px; /* Reduzi o tamanho da fonte para torná-lo mais legível */
    font-family: 'Play', sans-serif;
    padding: 10px 0; /* Aumentei o espaço superior e inferior */
    margin-bottom: 15px;
}

  form {
    display: flex;
    flex-direction: column;
    gap: 15px; /* Aumentei o espaço entre os elementos */

    i {
      font-size: 22px;
      margin-right: 10px; /* Adicionei margem à direita para separar o ícone do campo de entrada */
      margin-top:20px;
    }

    input {
        padding: 10px;
        height: 40px; /* Aumentei a altura do campo de entrada para torná-lo mais visível */
        width: 100%; /* Alterei para 100% para ocupar a largura total */
        border: none;
        border-bottom: 1px solid #000;
        font-size: 15px;
        outline: none;
    }
}
}


`
export const ErrorWrapper = styled.div`
    color: red;
    font-size: 14px;
   
`;

export const ConBtn = styled.div`
display:flex;
justify-content: space-between;
margin-top:35px;

a{
font-size:20px;
color:#bf77d1;
    &:hover{
        color:#b38;
    }
}

button{
padding:10px;
border-radius:5px; 
background-color:#bf77d1;
color:#FFF;
cursor:pointer;
border: none;
    &:hover{
     Background-color:#b38;
    }
}

`


export const Cadastro = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  padding: 15px;
  min-height: 600px; 
  width: 350px;
  border-radius: 10px;
  position:relative;

  h3 {
    font-size: 24px; /* Reduzi o tamanho da fonte para torná-lo mais legível */
    font-family: 'Play', sans-serif;
    padding: 10px 0; /* Aumentei o espaço superior e inferior */
    margin-bottom: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px; /* Aumentei o espaço entre os elementos */

    i {
      font-size: 22px;
      margin-right: 10px; 
     
    }

    input {
      padding: 5px;
      height: 40px; /* Aumentei a altura do campo de entrada para torná-lo mais visível */
      width: 100%; /* Alterei para 100% para ocupar a largura total */
      border: none;
      border-bottom: 1px solid #000;
      font-size: 15px;
      outline: none;
     
    }


    button{
        padding:10px;
        border-radius:5px; 
        background-color:#bf77d1;
        color:#FFF;
        cursor:pointer;
        border: none;
        position: absolute;
        bottom: 15px; /* Defina a distância desejada da parte inferior */
        left: 15px; /* Defina a distância desejada da esquerda */
        right: 15px; /* Defina a distância desejada da direita */
            &:hover{
             Background-color:#b38;
            }
    }
  }
}
`

