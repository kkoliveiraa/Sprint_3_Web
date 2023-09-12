import { Link } from 'react-router-dom';
import Sobrenos from '../routes/sobrenos';


export default function Rodape(){

    return(

            <Link to ="/sobrenos">
                <button id='BotaoSobrenos'> Sobre Nós</button>
            </Link>
            </p>
           
            <p className="infos">@Grupo ntc </p>
            <p className="infos">grupontc1@gmail.com </p>
            <p className="infos">(11)98716-6289</p>
        </footer>
       
        
    )
}

