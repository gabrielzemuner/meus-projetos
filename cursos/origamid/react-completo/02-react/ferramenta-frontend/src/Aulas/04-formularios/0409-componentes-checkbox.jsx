import { useState } from "react";
import Checkbox from "./Form/Checkbox";

export default function App() {
  const [linguagens, setLinguagens] = useState([]);
  const [termos, setTermos] = useState([]);

  return (
    <form>
      <h2>Checkbox</h2>
      <Checkbox
        options={["JavaScript", "PHP", "Ruby"]}
        value={linguagens}
        setValue={setLinguagens}
      />
      <h2>Termos</h2>
      <Checkbox
        options={["Li e aceito os termos"]}
        value={termos}
        setValue={setTermos}
      />
    </form>
  );
}
