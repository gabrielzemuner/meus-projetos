import { useState } from "react";
import Radio from "./Form/Radio";

export default function App() {
  const [cores, setCores] = useState("Vermelho");
  const [frutas, setFrutas] = useState("Vermelho");

  return (
    <form>
      <h2>Cores</h2>
      <Radio options={["Azul", "Vermelho"]} value={cores} setValue={setCores} />
      <h2>Frutas</h2>
      <Radio
        options={["Limão", "Laranja", "Uva"]}
        value={frutas}
        setValue={setFrutas}
      />
    </form>
  );
}
