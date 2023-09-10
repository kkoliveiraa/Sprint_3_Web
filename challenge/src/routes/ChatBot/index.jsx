import portinho from "../../assets/Portinho.png"
import iconePortinho from "../../assets/iconePortinho.png"
export default function ChatBot(){

    return(
        <main>
            <img id="portinho "src={portinho}/>
            <div>
                <p>
                    Nós da Porto Help oferemos aos nossos clientes um Chatbot de simples utilização e que conta com técnologias de STT( Speech to Text) e TTS (Text to Speech),  
                    que possibilita um atendimento mais rápido e fácil, 
                    visando simplificar ao máximo o chamado do modal.
                </p>
                <p>
                    Para isso, apresentamos a vocês o Portinho, nosso mascote virtual que será responsável pelo atendimento via Chatbot.
                    Diga Olá pro Portinho ! 
                    <img id="iconePortinho" src={iconePortinho}/>
                </p>
            </div>
        </main>
    )
}