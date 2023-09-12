import { Link } from 'react-router-dom';
import Sobrenos from '../routes/sobrenos';
import "../assets/caixa-1.png";
import "../components/styleFooter.css";
export default function Rodape(){

    return(
        <footer id="footerStyle">
            <p className="conteudoFooter">Entre em contato conosco</p>
            <p className="conteudoFooter">Quer saber mais sobre os Devs por trás do projeto? Clique no botão abaixo e confira</p>
            <div>
            <Link to ="/sobrenos">
                <button className='BotaoSobrenos'> Sobre Nós</button>
            </Link>
            </div>
           <div id="sobreNosCont">
            <p className='infos'>@Grupo ntc</p>
            <p  className='infos'> grupontc1@gmail.com</p>
             <p className='infos'>(11)98716-6289</p>
             </div>
        </footer>
       
        
    )
}
