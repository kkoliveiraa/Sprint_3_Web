import { Link } from 'react-router-dom'
import motorista from "../../assets/motorista.png"
import '../../routes/home/styleHome.css'
import Rodape from '../../components/rodape'
import caminhao from '../../assets/caminhao.png'
import onibus from '../../assets/onibus.png'
import trailer from '../../assets/trailer.png'

export default function Home(){


    return(
        <main>
            <div id="scrollableContainer" style={{ width: '100%', height: '80vh', overflow: 'auto' }}>

           <div id="superContainer">

            <div id="Container1">
           
                <h1 id="titulo">Com a Porto Help você pode mais!</h1>
                <h2 id="texto"> Buscamos criar um layout simples interativo mas sem 
                    deixar de lado um design atrativo e intessante
                </h2>
               <img id="motorista"src={motorista} alt="motorista de caminhão dirigindo" />
            </div>

        
        <div id="Container2">
            <p id="tituloC2">Aqui você poderá realizar o chamado de um modal de forma rápida e prática!</p>
            
            <p id="textoC2">A Porto Help visa auxiliar nossos clientes com o objetivo de realizar um atendimento eficaz e com praticidade,
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

        <div id="containerVei">
            <p className="conteudoVei">Visamos atender o chamado de veículos pesados, buscando relizar o chamado para as seguintes categorias:</p> 
            <div id="veiculos">

            <div className="veiculo">
            <p>Caminhões</p>
            <p className="imagemVeiculo"><img id="caminhao"src={caminhao} alt="imagem de caminhao laranja" /></p>
            </div>

            <div className="veiculo">
            <p>Ônibus</p>
            <p className="imagemVeiculo"><img id="onibus"src={onibus} alt="imagem de onibus azul" /></p>
            </div>

            <div className="veiculo">
            <p>Trailers</p>
           <p className="imagemVeiculo"><img id="trailer"src={trailer} alt="imagem de um trailer preto e branco"/></p>
            </div> 

            </div>
        </div>

        <div>
            <Rodape/>
        </div>
        </div>

        </main>
    )
}