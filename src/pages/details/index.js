import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { Container, Rodapé } from "../details/styles";
import {Link} from "react-router-dom";





function Details (){
    const {id} = useParams();
    const [filmes, setFilmes] = useState ({});
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect (() => {
        //consumir a api...

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b3492dbec92e96fd0f9f9759b2dfe829&language=pt-BR`)
            .then (response => response.json ())
            .then(data =>{
                const {title,poster_path,overview,release_date,vote_average} = data;
               const filme ={
                id,
                title,
                sinopse: overview,
                image: `${image_path}${poster_path}`,
                avaliacao: vote_average,
                lancamento: release_date
               };
               setFilmes(filme);
               console.log (data.results);
               
            })

    }, )
    



    return(
        <Container>
            
            <div className="filme">
                <img src={filmes.image} alt={filmes.sinopse}/>
                <div className="details">
                    <h1>{filmes.title}</h1>
                    <span className="sinopse">Sinopse: {filmes.sinopse}</span>
                    <span className="lançamento">Data de lançamento: {filmes.lancamento}</span>
                    <span className="avaliação">Avaliação: {filmes.avaliacao}</span>
                    <Link to= "/"><button>Voltar</button></Link>
                    
                </div>
            </div>
            <Rodapé>
            <span>© 2022 Copyright. Todos os Direitos reservados. Trabalho Portal de Filmes por Bianca Marques.</span>
            </Rodapé>
        </Container>
    )
}

export default Details;
