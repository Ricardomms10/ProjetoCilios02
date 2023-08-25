import { styled } from "styled-components";


export const Container = styled.div`
margin:10px 20px;
padding:10px 20px 10px 40px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
height:150px;  
width:auto;
margin:20px 20px;
border: solid 4px #e195a8;


h4{
    text-align: center;
    font-size:20px;
}

h2{
    text-align: center;
    font-size:30px;
    font-family: 'Play', sans-serif;
}

p{
    font-size:20px;
    font-weight: bold;
    color:#878584;
    text-align: center;
    margin-top:15px;
}


`


export const Horario = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px 20px;
  height: 150px;
  width: auto;
  border: solid 4px #e195a8;

  h4 {
    font-size: 20px;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin: 10px;

    /* Adicionar estilos específicos para telas menores que 900px */
    @media (max-width: 900px) {
      flex-wrap: wrap; /* Quebra em várias linhas */
      justify-content: center; /* Centraliza os botões */
      max-width: 300px; /* Define uma largura máxima para o contêiner */
      overflow-x: auto; /* Adiciona uma barra de rolagem horizontal */
    }

    li {
      button {
        font-size: 15px;
        font-weight: bold;
        border: 2px solid rgba(225, 149, 230, 0.9);
        padding: 9px 25px;
        border-radius: 10px;
        color: rgba(225, 149, 230, 0.9);
        &:hover {
          background-color: rgba(225, 149, 230, 0.3);
          cursor: pointer;
        }
      }
    }
  }
`;

export const Calendario = styled.div`
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
display:flex;
flex-direction: column;
align-items: center;
padding:20px;
height:150px;  
width:auto;
margin:20px 20px;
border: solid 4px #e195a8;

h1{
    font-size:20px;
    margin-bottom:10px;
   
}

label{
    margin-right:10px;
    font-size:15px;
}

input{
    font-size:15px;
    padding:5px;
    border-radius: 5px;
}

p{
    font-size:15px;
    
    margin: 20px 15px 0px 20px ;
}

`

export const Confirma = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
z-index: 1000;
 
    div{
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    max-width: 400px; 
    text-align: center;
    

     h2{
        font-size:20px;
        margin-bottom:10px;
     }

     p{ maring-top:5px;
        font-size:15px;
     }
 }
`

export const DivBtn = styled.span`
display: flex;
justify-content: space-between;
margin-top: 20px;
button{
    font-size:13px;
    font-weight: bold;
    
    border: 2px solid rgba(45, 207, 110, 0.9);
    padding:9px 25px;;
    border-radius:10px;
    color:  rgba(45, 207, 110, 0.9);
    &:hover{
       background-color: rgba(45, 207, 110, 0.3);
       cursor:pointer;
    }   

    }
}

`