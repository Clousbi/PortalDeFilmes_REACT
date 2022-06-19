import { Container,Navegador, Filme, Lançamentos, Avaliações,Rodapé } from "./styles";
import {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";




function Home (){
    const [filmes, setFilmes] = useState ([]);
    const image_path = 'https://image.tmdb.org/t/p/w500';
    const carousel = useRef(null);


    useEffect (() => {
        //consumir a api...

        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b3492dbec92e96fd0f9f9759b2dfe829&language=pt-BR&page=1')
            .then (response => response.json ())
            .then(data =>{
               console.log (data.results)
               setFilmes(data.results)
            })

    }, [])

    const handleLeftClick = (e) =>{
        e.preventDefault();
        console.log (carousel.current);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e) =>{
        e.preventDefault();
        console.log (carousel.current);
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }


    
    return (
      <Container>
        <Navegador>
            <li>
                <img src="https://mail.google.com/mail/u/0?ui=2&ik=76d2191e33&attid=0.1&permmsgid=msg-a:r1039454031523924550&th=1817c31a6feca35d&view=att&disp=safe&realattid=f_l4lcwf1s0" alt="logo"/>
            </li>
            <li>
                <Link to={`/`}>
                <button>Home</button>
                </Link>
                
            </li>
            <li>
            <Link to={`/lancamentos`}>
                <button>Lançamentos</button>
                </Link>
            </li>
            <li>
            <Link to={`/filmes`}>
                <button>Filmes</button>
                </Link>
            </li>
            <li>
            <Link to={`/pesquisa`}>
                <button>Pesquisa</button>
                </Link>
            </li>
        </Navegador>
        <h1>Lançamentos</h1>
        <div className="carousel" ref={carousel}>
            {filmes.map(filme =>{
                return (
                    
                   <Filme>
                        
                        <Link to= {`/details/${filme.id}`}>
                            <img src={`${image_path}${filme.poster_path}`} alt="Cartaz"/>
                            
                        </Link>
                        
                    </Filme> 
                )
            })} 
        </div>
        <div className= "buttonsSeta">
            <button onClick={handleLeftClick}><img src="https://portais.univasf.edu.br/cei-2019/imagens/Seta.png/@@images/510bbe9a-f5a5-4a47-8a91-e84f8f801221.png" alt="seta esquerda"/></button>
            <button onClick={handleRightClick}><img src="https://portais.univasf.edu.br/cei-2019/imagens/Seta.png/@@images/510bbe9a-f5a5-4a47-8a91-e84f8f801221.png" alt="seta direita"/></button>
        </div>
        <h1>Filmes</h1>
        
        <Lançamentos>
            <div className="filme">
               <img src="https://image.tmdb.org/t/p/w500/gopGghuMtmdMviBcl9G0JfVB2RZ.jpg" alt="cartaz"/>
                <div className="details">
                    <h2>Animais Fantásticos: Os Segredos de Dumbledore</h2>
                    <span className="sinopse">Sinopse: O professor Alvo Dumbledore sabe que o poderoso mago das trevas Gellert Grindelwald está se movimentando para assumir o controle do mundo mágico. Incapaz de detê-lo sozinho, ele pede ao magizoologista Newt Scamander para liderar uma intrépida equipe de bruxos, bruxas e um corajoso padeiro trouxa em uma missão perigosa, em que eles encontram velhos e novos animais fantásticos e entram em conflito com a crescente legião de seguidores de Grindelwald. Mas com tantas ameaças, quanto tempo poderá Dumbledore permanecer à margem do embate?</span>   
                </div> 
            </div> 
            <div className="filme">
               <img src="https://image.tmdb.org/t/p/w500/f4SvCKIUrC2cDR7Xo4k1kaGAqQ2.jpg" alt="cartaz"/>
                <div className="details">
                    <h2>Sonic 2: O Filme</h2>
                    <span className="sinopse">Sinopse: Depois de se estabelecer em Green Hills, Sonic está pronto para mais liberdade e deixar sua marca como um herói, e Tom e Maddie concordam em deixá-lo em casa enquanto vão de férias. Mas, assim que eles se foram, Dr. Robotnik volta, desta vez com um novo parceiro, Knuckles, em busca de uma esmeralda que tem o poder de construir e destruir civilizações. Sonic se une a um novo companheiro, Tails, e juntos eles embarcam em uma jornada para encontrar a esmeralda antes que ela caia nas mãos erradas.</span>   
                </div> 
            </div> 
            <div className="filme">
               <img src="https://image.tmdb.org/t/p/w500/vsX9gj7t56ZlMYKNYccskeW5adT.jpg" alt="cartaz"/>
                <div className="details">
                    <h2>Cidade Perdida</h2>
                    <span className="sinopse">Sinopse: Uma romancista reclusa acredita que nada seria pior que fazer a turnê do seu livro mais recente com o modelo que ilustra a capa. Tudo muda quando a autora e o modelo sofrem uma tentativa de sequestro, e, com isso, são levados para uma surpreendente aventura na selva.</span>   
                </div> 
            </div> 
            <div className="vermais">
               <Link to= {`/filmes`}><button>Ver mais</button></Link>   
            </div> 
        </Lançamentos>
        <h1>Avaliações</h1>

        <Avaliações>
            <li>
               <img src="https://i.pinimg.com/564x/bf/29/da/bf29da2d6abc3f9495bfd8db9e66efb2.jpg" alt="foto"/>  
                <span className="sinopse">A saga Harry Potter foi um fenômeno tão grande que era, de fato, difícil dar sequência aos seus passos. Muitos foram os que se aventuraram por esse caminho, e raros os que alcançaram algum resultado digno de nota. É curioso perceber que entre essas tentativas há uma da própria J.K. Rowling, criadora do menino bruxo de óculos redondos e cicatriz em forma de raio na testa. </span>   
                 
            </li> 
            <li>
               <img src="https://i.pinimg.com/564x/f1/2a/0b/f12a0bc67a53e11bc583ea6a8a3018b2.jpg" alt="foto"/>   
                <span className="sinopse">A discussão a respeito da representatividade tem se mostrado cada vez mais vital na indústria do entretenimento, não apenas como causa social, mas também – e principalmente – por uma questão de sobrevivência.  </span>   
                
            </li> 
            <li>
               <img src="https://i.pinimg.com/564x/02/ad/48/02ad48743f3d732e879051035d399c02.jpg" alt="foto"/>   
                <span className="sinopse">Existir é um dos destaques latino-americanos do 13º Cinefantasy. E o seu prólogo alimenta as falsas expectativas de que teremos pela frente uma história grandiosa envolvendo viagens, enigmas e planos extraterrestres. Isso tudo por conta das luzes descend </span>   
                 
            </li> 
             
        </Avaliações>
        <Rodapé>
            <span>© 2022 Copyright. Todos os Direitos reservados. Trabalho Portal de Filmes por Bianca Marques.</span>
        </Rodapé>



       

          


      </Container>

      
    )
}

export default Home;