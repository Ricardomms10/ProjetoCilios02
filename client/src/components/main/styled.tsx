import styled from "styled-components"

export const Container = styled.div`
display:flex;
flex-direction: column;
`

export const ImgOlho = styled.div`

img{
    width: 100%;
    max-width: 100vw;
    height: auto;
}
`

export const Principal = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin:15px;

span{
    display:flex;
    align-items: center;
    gap:10px;
    position: relative;

    p{
        top: 30px;
        left: 110px;
        position: absolute;
        font-size:30px;
        font-family: 'Courgette', cursive;
        letter-spacing: 3px;
    }

    h2{
        font-size:50px;
        color:#8e929c;
        font-family: 'Play', sans-serif;
        font-family: 'Roboto Condensed', sans-serif;
        opacity: 30%;
    }
}

ul{
    display:flex;
    gap:40px;
    margin-top:30px;
    li{
      font-size:20px; 
      font-family: 'Courgette', cursive;
    }
}

@media (max-width: 900px) {

    span{
        h2{
            text-align: center;
        }
        p{
            left:75px;
            top:40px;
        }
    }
}
`

export const Maps = styled.div`
width:100%;
height: 350px;

    iframe{
      width:100%;
      height:100%;
}
`
export const Apresenta = styled.div`
padding:20px 100px;

p{
    line-height: 1.5;
    text-align: center;
    font-family: 'Play', sans-serif;
    font-size:25px;
}

@media (max-width: 900px) {
    max-height: 300px; /* Define a altura máxima para o contêiner */
    overflow-y: scroll; /* Adiciona uma barra de rolagem vertical */
  }
`

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

export const Servico = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const ServicoBox = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: calc(50% - 10px);
  padding: 10px;
  width: 168px; 
  height:  220px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  display:flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color:#FFF;
  border: solid 4px #e195a8;

  h1 {
    font-size: 15px;
    margin-top:10px;
    font-family: 'Play', sans-serif;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 100px;
  }

  p {
    font-size: 15px;
    font-weight: bold;
    color: #6d686e;
    margin-top: 10px;
  }

  button {
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 15px;
    background-color: #e195a8;
    color: #fff;
    position: absolute;
    bottom: 10px;

    &:hover {
      cursor: pointer;
      background-color: #e195e6;
    }
  }
`

export const Boxbtn = styled.div`
padding:10px; 

button{
    margin:10px;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 15px;
    background-color: #e195a8;
    color:#FFF;
    cursor:pointer;
}
`