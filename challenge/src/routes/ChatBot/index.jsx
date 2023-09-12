import portinho from "../../assets/Portinho.png"
import iconePortinho from "../../assets/iconePortinho.png"
import background from "../../assets/background.png"
import ellipse from "../../assets/ellipse-1.png"   
import close from "../../assets/close.png"
import attach from "../../assets/attach.png"
import audio from "../../assets/audio.png"
import ellipse2 from "../../assets/ellipse-2.png"
import emote from "../../assets/emote.png"
import emailSend from "../../assets/email-send.png"
import retangle from "../../assets/rectangle-11.png"
import retangle2 from "../../assets/rectangle-12.png"
import React from "react";
import "./style.css";
    

    export default function Chatbot  () {
      return (
        <div id="scrollableContainer" style={{ width: '100%', height: 'calc(100vh - 60px)', overflow: 'auto' }}>
        <div className="chatbot">
          <div className="chatbot-px">
            <div className="overlap">
            <img id="background" alt="Background" src={background}/>
              <div className="apresentao-do">
                <div className="overlap-group">
                <img id="retangle" alt="Retangulo fundo de texto" src={retangle2} />
                  <p className="para-isso">
                    Para isso, apresentamos a vocês o Portinho, nosso mascote virtual que será responsável pelo atendimento
                    via Chatbot.
                    <br />
                    <br />
                    Diga Olá pro Portinho !
                  </p>
                  <img className="image" alt="Image" src={iconePortinho} />
                </div>
              </div>
              <img className="informaes" alt="Informaes" src={retangle} />
              
              <p className="text-wrapper">Nós da Porto Help oferemos aos nossos clientes um Chatbot de simples utilização e que conta com técnologias de STT( Speech to Text) e TTS (Text to Speech),  que possibilita um atendimento mais rápido e fácil, visando simplificar ao máximo o chamado do modal.</p>
              <div className="tela-chatbot">
                <div className="div">
                  <div className="overlap-2">
                    <div className="ellipse-wrapper">
                      <img className="ellipse" alt="Ellipse" src={ellipse} />
                    </div>
                    <div className="text-wrapper">Portinho</div>
                    <img className="close" alt="Close" src={close} />
                  </div>
                  <div className="overlap-group-2">
                    <div className="caixa-texto" />
                    <div className="text-wrapper-2">Digite sua mensagem...</div>
                    <img className="emote" alt="Emote" src={emote} />
                    <img className="email-send" alt="Email send" src={emailSend} />
                    <img className="attach" alt="Attach" src={attach} />
                    <img className="audio" alt="Audio" src={audio} />
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
            </div>
          </div>
        </div>
      </div>
      );
    };