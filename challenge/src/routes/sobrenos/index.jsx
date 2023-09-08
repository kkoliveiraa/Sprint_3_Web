import rafa from "../../assets/rafa.png";
import edu from "../../assets/edu.png";
import thiago from "../../assets/Thiago Gil Camargo.png";
import caua from "../../assets/caua.png";
import kaka from "../../assets/kaka.png";

import "./css/style.css";
export default function Sobrenos() {
  return (
    <main>
      <div class="integrantes">
        <img id="integrante" src={caua} alt="img caua" />
        <img id="integrante" src={edu} alt="img edu" />
        <img id="integrante" src={kaka} alt="img kaique"/>
        <img id="integrante" src={rafa} alt="img rafa" />
        <img id="integrante" src={thiago} alt="img thiago" />
      </div>
    </main>
  );
}
