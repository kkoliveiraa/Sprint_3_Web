import { Link } from 'react-router-dom';
import Sobrenos from '../routes/sobrenos';
import "../assets/caixa-1.png";
import "../components/styleFooter.css";
export default function Rodape(){

    return(
        <footer id="footerStyle">
            <p className="conteudoFooter">Entre em contato conosco</p>
            <p className="conteudoFooter">Quer saber mais sobre os Devs por trás do projeto? Clique no botão abaixo e confira</p>
            <Link to ="/sobrenos">
                <button className='BotaoSobrenos'> Sobre Nós</button>
            </Link>
           
            <p>@Grupo ntc<span>|</span>grupontc1@gmail.com<span>|</span> (11)98716-6289</p>
        </footer>
       
        
    )
}
