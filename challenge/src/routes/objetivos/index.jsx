import React from "react";
import "./estilo.css";
import machine from "../../assets/machine.png";
import porto from "../../assets/porto.png";
import logo from "../../assets/logoPortoHelp.png";
import caixa1 from "../../assets/caixa-1.png";
import caixa2 from "../../assets/caixa-2.png";



export default function Objetivos (){

  return (
    <div id="scrollableContainer" style={{ width: '100%', height: 'calc(100vh - 60px)', overflow: 'auto' }}>
    <div className="objetivos">
      <div className="objetivos-px">
        <div className="overlap">
          <div className="conteudo">
            <img id="machine" src={machine} alt="Machine-learning"/>
            <div className="overlap-group">
              <p className="text-wrapper">
                Com base nessa classificação precisa, o sistema recomendará o modal de atendimento mais adequado para
                cada situação, como guincho, socorro mecânico ou reboque, dessa forma, nosso sistema estará pronto para
                oferecer recomendações confiáveis e eficientes durante o atendimento de veículos pesados
              </p>
              <p className="div">
                Ao utilizar algoritmos de aprendizado de máquina, nosso sistema será capaz de analisar imagens de
                veículos pesados e cargas e realizar a identificação automática de seus tipos, levando em consideração
                características como o formato, tamanho e outros atributos relevantes.
              </p>
            </div>
          </div>
          <p className="subtitulo">
            E como pretendemos implementar tudo isso?
          </p>
          <div className="parceria-porto">
            <img className="porto-seguro" alt="Porto seguro" src="../../assets/porto.png" />
            <div className="logo-porto-help">
              <div className="overlap-group-2">
                <img className="img" alt="Logo porto help" src="../../assets/logoPortoHelp.png" />
              </div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="div-wrapper">
              <p className="p">
                O projeto tem como objetivo desenvolver um sistema de recomendação de modal de atendimento para veículos
                pesados em parceria com a Porto Seguro. Através da utilização de técnicas de inteligência artificial e
                processamento de imagem, o sistema será capaz de identificar e classificar os tipos de veículos pesados
                e cargas, além de recomendar o modal de atendimento mais adequado para cada situação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
