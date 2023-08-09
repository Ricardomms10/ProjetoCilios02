import { styled } from "styled-components";


export const Container = styled.div`
 display:flex;
 justify-content: space-between;
 padding:16px 48px;
 background-color:#000;
 


`

export const Contato = styled.div`


h2{
    color:#FFF;
    font-size:20px;
}

ul{
    margin-top:10px;

    li{
        display:flex;
        align-items: center;
        gap:10px;
        margin-bottom:10px;
        i{
            color:#FFF;
            border: solid 1px #fff;
            padding:10px;
            font-size: 17px;
        }
        h3{
            color:#FFF;
            font-family: 'Oswald', sans-serif;
            font-size: 15px;
            letter-spacing: 2px
        }
    }
}
`

export const Links = styled.div`
display:flex;
flex-direction:column;
align-items: center;


h2{
    font-size:20px;
    color:#FFF;
}

div{
 
    
    i{
        color:#FFF;
        border: solid 1px #fff;
        padding:15px;
        font-size: 25px;
        border-radius:50% ;
        margin: 10px;
        transition: 0.5s;

        &:hover{
            color:#bf77d1;
            border: solid 1px #bf77d1;
            cursor:pointer
        }
    }

}
`

export const Marca = styled.div`

p{
    color:#FFF;
}

`