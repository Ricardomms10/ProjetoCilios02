import styled from "styled-components"


export const Container = styled.div`
display:flex;
flex-direction: column;


`

export const ImgOlho = styled.div`


img{
    width: 100%;
    
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

`

export const Maps = styled.div`
width:100%;
height: 350px;

   iframe{
     width:100%;
     height:100%;
}

`
export const Text = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin:20px;

h1{
    font-size: 30px;
    font-weight: bold;
    margin-bottom:30px;
}

`

export const Servico = styled.div`
display:flex;
gap:10px;


div{
    
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    width: 168px; 
    height:  220px;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:1px;
    position: relative;
    background-color:#FFF;
    
   
   

    h1{
        margin-top:10px;
        font-size:16px;
        font-family: 'Play', sans-serif;
    }


    h3{
        position: absolute;
       top: 70px;
       font-size:15px;
       
       font-weight: bold;
    }

    p{
       font-size:15px;
       position: absolute;
       top: 50px;
       font-weight: bold;
       color:#6d686e;
    }

    button{
        position: absolute;
        bottom: 10px;
        padding:10px;
        border-radius: 5px;
        font-weight: bold;
        font-family: 'Play', sans-serif;
        font-size:15px;
        background-color:#e195a8;
        color:#FFF;

        &:hover{
            cursor: pointer;
            background-color:#e195e6;
        }
    }
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
`