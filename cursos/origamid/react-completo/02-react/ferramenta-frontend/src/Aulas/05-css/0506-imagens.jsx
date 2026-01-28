import "./Imagens.css";
import foto from "../../img/foto.jpg";
import dog from "../../img/dog.svg";

export default function App() {
  return (
    <div>
      <p className="fundo"></p>
      <img src={dog} alt="Cachorro" />
      <img src={foto} alt="Cachorro" />
      <img src="" alt="" />
    </div>
  );
}
