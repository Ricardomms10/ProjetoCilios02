import styled from "styled-components";


export const Container = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
gap:30px;
height:100vh;


`

export const Confirmacao = styled.div`
display:flex;
flex-direction: column;
box-shadow: 2px 2px 5px rgba(0, 0, 3, 0.4);
padding:15px;
height: 300px;
width: 350px;
border-radius:10px;



h3{
    font-size:35px;
    font-family: 'Play', sans-serif;
    padding:3px;
    margin-bottom:15px;
    
}

form{
    display:flex;
    flex-direction: column;
    gap:10px;
    
    i{
        font-size:22px;
        margin:13px
    }

    input{
        padding:10px;
        height: 10px;
        width: 250px; 
        border: none;
        border-bottom: solid 1px #000;
        font-size:15px;
        outline: none;
    }


}
    

`

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
display:flex;
flex-direction: column;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
padding:15px;
height: 430px;
width: 350px;
border-radius:10px;

h3{
    font-size:35px;
    font-family: 'Play', sans-serif;
    padding:3px;
    margin-bottom:15px;
    
}

form{
    display:flex;
    flex-direction: column;
    gap:10px;
    
    i{
        font-size:22px;
        margin:13px
    }

    input{
        padding:10px;
        height: 10px;
        width: 220px; 
        border: none;
        border-bottom: solid 1px #000;
        font-size:15px;
        outline: none;
    }


}

`

export const BtnCad = styled.div`
display:flex;
justify-content: center;


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