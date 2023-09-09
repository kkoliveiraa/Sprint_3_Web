import { Link } from "react-router-dom"
import "./style.css"
import logoPortoHelp from "../assets/logoPortoHelp.png"

export default function menu(){

    return(
        <nav id="menu" className="menu"> 
            <Link to ='/'> <img id="logoHome" src={logoPortoHelp} alt="PortoHelp" /> </Link>
            
            <Link to ='/solicitar' className="Link">Solicitar Chamado</Link>
            <Link to ='/objetivos' className="Link">Objetivos</Link>
            <Link to ='/ChatBot' className="Link">Chatbot</Link>
            
            <Link to ='/sobrenos' className="Link">Sobre Nós</Link>
            
            




        </nav>


    )
}