import styled from "styled-components";

export const Container = styled.div`
 padding-top: 5rem; 
 
h1{
    margin: 3rem 0;
   
}
.filme{
    display: flex;
    align-items: center;
    justify-content: center;
}
img{
    width: 300px;
    border-radius: 1rem;
}
.details{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6rem;
    max-width: 50%;
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
span{
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
}
.avaliação{
    background:#026C7C;
    display: flex;
    border: none;
    cursor: pointer;
    border-radius:  1rem;
    color: #F1E4F3;
    padding: 0.8rem 1rem;
    margin-top: 1rem;
    font-size: 100%;
    
}
.lançamento{
   opacity: 0.5;
}
`
export const Rodapé = styled.div`
justify-content: center;
align-items: flex-start;
text-align: center;
margin-top: 10rem;

`


