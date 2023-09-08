import { Link } from 'react-router-dom'
import "./styleHome.css"
import motorista from "../../assets/motorista.png"
export default function Home(){

    return(
        <main>
           <div id="superContainer">

            <div id="Container1">
           
                <h1 id="titulo">Com a Porto Help você pode mais!</h1>
                <h2 id="texto"> Buscamos criar um layout simples interativo mas sem 
                    deixar de lado um design atrativo e intessante
                </h2>
               <img id="motorista"src={motorista} alt="motorista de caminhão dirigindo" />
            </div>

        {/* container a direita com botão infos de chamao*/} 
        <div id="Container2">
            <p id="tituloC2">Aqui você poderá realizar o chamado de um modal de forma rápida e prática!</p>
            
            <p>A Porto Help visa auxiliar nossos clientes com o objetivo de realizar um atendimento eficaz e com praticidade,
                buscando o melhor para todos os usuários, independente ed faixa etária/conhecimento. Para isso iremos utilizar
                de métodos com fácil utilização e que atendam todas as necessidades
            </p>
            <Link to ="/solicitar">
                <button className='botao'>Realizar Chamado</button>
            </Link>
        </div>
        
        

        </div>

        <div id="containerObj"> 
            <p id="conteudoObj">Entenda um pouco mais sobre o projeto Porto Help </p>
            <Link to ="/objetivos">
                <button className='botaoObj'>Objetivos</button>
            </Link>
        </div>

        <div>
            <p>Visamos atender o chamado de veículos pesados, buscando relizar o chmado para as seguintes categorias:</p>
            <p>Caminhões</p><p>Ônibus</p><p>Trailers</p>
        </div>
        </main>
    )
}