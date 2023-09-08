import opencv from "../../assets/openCV.jpg"
import openCVexemplo from "../../assets/openCVexemplo.png"
export default function Solicitar(){

    
    return(
        <main>
            <h1> Realizando o chmado do modal</h1>
            <div>
                <p> 
            Através do HaarCascade, uma ferramenta da biblioteca OpenCV, poderemos  selecionar um pequeno  número 
            de características visuais críticas de uma determinada imagem e as utilizar para a etapa de detecção e 
            classificação de objetos. Através de um “Scanner” nosso cliente poderá enviar
            sua localização e informações relevantes do veículo para que o chamado seja feito adequadamente.
                </p>
            </div>

            <div>
            <img id="openCV" src={opencv} />
            </div>

            <div>
                <p>
                O sistema pode proporcionar maior agilidade e eficiência no atendimento, reduzindo o tempo de espera do cliente e aumentando a satisfação do cliente com o serviço prestado. Para o prestador de serviço, o sistema pode ajudar a reduzir custos e aumentar a produtividade, ao fornecer informações mais precisas e assertivas sobre o modal de atendimento mais adequado para cada situação.
                </p>
                <img id="openCVexemplo" src={openCVexemplo} />
            </div>

        </main>
    )
}