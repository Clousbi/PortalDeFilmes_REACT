import styled from "styled-components";

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
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

export const FilmeLista = styled.ul`
   list-style: none;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax( 200px, 1fr));
   column-gap: 3rem;
   row-gap: 4rem;

`

export const Filme = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img{
        width: 200px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span{
        font-weight: bold;
        font-size: 120%;
        text-align: center;
        
    }

    a{
        transition: all 0.3s;
    }

    a:hover{
        transform: scale(1.1);
    }
`
export const Rodapé = styled.div`
justify-content: center;
align-items: flex-start;
text-align: center;
margin-top: 10rem;

`
