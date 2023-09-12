import { styled } from "styled-components";



export const Contend = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
top:0;
padding:15px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
background-color:#FFF;




img{
    flex:1
    height:100px ;
    width: 100px;
}

span{
    padding:10px;
    border-radius: 30px;
    font-family: 'Courgette', cursive;
    font-family: 'Play', sans-serif;
    font-size:25px;
    font-weight: bold;
    color:#e195a8;

    button{
        padding: 9px;
        border: none;
        font-weight: bold;
        font-size: 20px;
        background-color: #FFF;
        color: #e195a9;
    
    
        &:hover {
          cursor: pointer;
          color: red;
        }
    }
}

a{
    padding:10px;
    border-radius: 30px;
    font-family: 'Courgette', cursive;
    font-family: 'Play', sans-serif;
    font-size:15px;
    font-weight: bold;
    color:#FFF;
    background-color:#e195a8;

    &:hover{
      background-color:#e195e6;
      cursor: pointer;
    }
}

@media (max-width: 900px) {
    span{
        font-size:15px;

        button{
            font-size:15px;
        }
    }

    
  }
`

