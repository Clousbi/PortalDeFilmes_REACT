import styled from "styled-components";

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
    }
    .buttonsSeta img{
        max-width: 20px;
    }
    .buttonsSeta{
        width: 100%;
        text-align: center;
    }
    .buttonsSeta button{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .buttonsSeta button:first-child img{
        transform: rotate(180deg);
    }
    .carousel{
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
    }
    .carousel::-webkit-scrollbar{
        display: none;
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


export const Filme = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img{
        width: 200px;
        border-radius: 1rem;
        margin-bottom: 2rem;
        padding: 10px;
        flex: none;
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
export const Lançamentos = styled.div`
h2{
    margin-top: -30px;
}
.filme{
    display: flex;
    align-items: center;
    justify-content:center;
    margin: 2rem;
}
img{
    width: 250px;
    border-radius: 1rem;
}
.details{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6rem;
    max-width: 50%;
}
span{
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
}
.vermais button{
    background:#026C7C;
    border: none;
    cursor: pointer;
    border-radius:  1rem;
    color: #F1E4F3;
    padding: 0.8rem 3rem;
    margin-top: 1rem;
    margin-left: 40rem;
    font-size: 100%;
    transition: all 0.3s;
}
.vermais button:hover{
    background: #025764;
}
`
export const Avaliações = styled.ul`
list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
column-gap: 3rem;
row-gap: 4rem;

li{
    display: flex;
    flex-direction: column;
    align-items: center;

}
img{
    width: 180px;
    border-radius: 6rem;
    margin-bottom: 2rem;
}
span{
    font-weight: bold;
    font-size: 120%;
}

`
export const Rodapé = styled.div`
justify-content: center;
align-items: flex-start;
text-align: center;
margin-top: 10rem;

`

