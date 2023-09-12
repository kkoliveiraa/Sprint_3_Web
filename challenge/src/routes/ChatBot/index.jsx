import portinho from "../../assets/Portinho.png"
import iconePortinho from "../../assets/iconePortinho.png"
import background from "../../assets/background.png"    
import React from "react";
import "./style.css";
    

    export default function Chatbot  () {
      return (
        <div className="chatbot">
          <div className="chatbot-px">
            <div className="overlap">
            <img id="background" alt="Background" src={background}/>
              <div className="apresentao-do">
                <div className="overlap-group">
                  <p className="para-isso">
                    Para isso, apresentamos a vocês o Portinho, nosso mascote virtual que será responsável pelo atendimento
                    via Chatbot.
                    <br />
                    <br />
                    Diga Olá pro Portinho !
                  </p>
                  <img className="image" alt="Image" src="image-1.png" />
                </div>
              </div>
              <img className="informaes" alt="Informaes" src="informa-es.png" />
              <div className="tela-chatbot">
                <div className="div">
                  <div className="overlap-2">
                    <div className="ellipse-wrapper">
                      <img className="ellipse" alt="Ellipse" src="ellipse-1.png" />
                    </div>
                    <div className="text-wrapper">Portinho</div>
                    <img className="close" alt="Close" src="close.png" />
                  </div>
                  <div className="overlap-group-2">
                    <div className="caixa-texto" />
                    <div className="text-wrapper-2">Digite sua mensagem...</div>
                    <img className="emote" alt="Emote" src="emote.svg" />
                    <img className="email-send" alt="Email send" src="email-send.png" />
                    <img className="attach" alt="Attach" src="attach.png" />
                    <img className="audio" alt="Audio" src="audio.png" />
                  </div>
                  <div className="msg-portinho">
                    <p className="p">Olá ! Sou o Portinho, o bot da Porto Help !</p>
                  </div>
                  <div className="div-wrapper">
                    <p className="p">No que posso te ajudar?</p>
                  </div>
                  <div className="msg-cliente">
                    <div className="text-wrapper-3">Olá Portinho !</div>
                  </div>
                  <div className="msg-cliente-2">
                    <p className="text-wrapper-3">Preciso de um guincho urgente</p>
                  </div>
                  <div className="msg-portinho-2">
                    <p className="text-wrapper-4">Estou enviando um modal para você agora mesmo</p>
                  </div>
                </div>
              </div>
              <img className="tit-porto" alt="Tit porto" src="tit-porto.png" />
            </div>
          </div>
        </div>
      );
    };