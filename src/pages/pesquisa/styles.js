import styled from "styled-components";

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
    }
    label{
        display: block;
        margin-bottom: 0.8em;
        font-weight: bold;
    }
    input{
        color: #F1E4F3;
        background-color: #BFAB25;
        padding: 0.2em;
        border: none;
        border-bottom: solid 4px #B81365;
        border-radius: 8px 8px 0 0;
        font-size: 3.5rem;
        font-weight: bold;
        width: 100%;
        outline: none;
        transition: all 0.3s;
    }
    input:hover{
        background-color: #9A8A1D;   
    }

`
export const Resultado = styled.div`
 .item{
    font-size: 1.5rem;
    font-weight: bold;
    color:#E9D5EC;
    line-height: 2.5rem;
    list-style-position: inside;
 }
 .item:hover{
    cursor: pointer;
    color: #F8F1F9;
    background-color: #141414;
 }

 
 span{
    padding-left: 1ch;
 }
    


`
export const Navegador = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax( 200px, 1fr));
    column-gap: 4px;
    row-gap: 4rem;
    align-items: center;
    justify-items: center;

    img{
        width: 100px;
        border-radius: 4rem;
    }

    button{
    background:#B81365;
    border: none;
    cursor: pointer;
    border-radius:  1rem;
    color: #F1E4F3;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s;
    }
    button:hover{
    background: #A6115C;
    }
`


export const Rodapé = styled.div`
justify-content: center;
align-items: flex-start;
text-align: center;
margin-top: 10rem;

`
