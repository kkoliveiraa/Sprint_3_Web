import rafa from "../../assets/rafa.png";
import edu from "../../assets/edu.png";
import thiago from "../../assets/thiago.png";
import caua from "../../assets/caua.png";
import kaka from "../../assets/kaka.png";

import "./css/style.css";
export default function Sobrenos() {
  return (
    <main>
      <div class="integrantes">
        <img id="integrante" src={caua} alt="Icone Cauã"/>
        <img id="integrante" src={edu} alt="Icone Edu"/>
        <img id="integrante" src={kaka} alt="Icone Kaique"/>
        <img id="integrante" src={rafa} alt="Icone Rafa"/>
        <img id="integrante" src={thiago} alt="Icone Thiago"/>
      </div>
    </main>
  );
}
