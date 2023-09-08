import { Link } from 'react-router-dom';
import Sobrenos from '../routes/sobrenos';

export default function Rodape(){

    return(
        <footer>
            <p>Entre em contato conosco</p>
            <p>Quer saber mais sobre os Devs por trás do projeto? Clique no botão abaixo e confira</p>
            <Link to ="/sobrenos">
                <button> Sobre Nós</button>
            </Link>
           
            <p>@Grupo ntc<span>|</span>grupontc1@gmail.com<span>|</span> (11)98716-6289</p>
        </footer>
       
        
    )
}

