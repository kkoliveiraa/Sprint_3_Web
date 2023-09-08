import React from "react";
import "./css/style.css";

export const Objetivos = () => {
  return (
    <div className="objetivos">
      <div className="objetivos-px">
        <div className="overlap">
          <img className="background" alt="Background" src="background.svg" />
          <div className="conteudo">
            <img className="machine-learning" alt="Machine learning" src="machine-learning.png" />
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
          <p className="e-como-pretendemos">
            <span className="span">E como pretendemos </span>
            <span className="text-wrapper-2">implementar</span>
            <span className="span"> tudo isso?</span>
          </p>
          <div className="parceria-porto">
            <img className="porto-seguro" alt="Porto seguro" src="porto-seguro.png" />
            <div className="logo-porto-help">
              <div className="overlap-group-2">
                <img className="img" alt="Logo porto help" src="logo-porto-help.png" />
                <div className="help">HELP</div>
              </div>
              <div className="porto">PORTO</div>
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
          <img className="tit-porto" alt="Tit porto" src="tit-porto.png" />
        </div>
      </div>
    </div>
  );
};
