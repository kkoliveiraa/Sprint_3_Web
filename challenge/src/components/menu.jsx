import { Link } from "react-router-dom"
import "./style.css"
import logoPortoHelp from "../assets/logoPortoHelp.png"

export default function menu(){

    return(
        <nav id="menu" className="menu"> 
            <Link to ='/'> <img id="logoHome" src={logoPortoHelp} alt="PortoHelp" /> </Link>
            
            <span>|</span>
            <Link to ='/solicitar' className="Link">Solicitar Chamado</Link>
            <span>|</span>
            <Link to ='/objetivos' className="Link">Objetivos</Link>
            <span>|</span>
            <Link to ='/ChatBot' className="Link">Chatbot</Link>
            <span>|</span>
            <Link to ='/sobrenos' className="Link">Sobre Nós</Link>
            <span>|</span>
            




        </nav>


    )
}