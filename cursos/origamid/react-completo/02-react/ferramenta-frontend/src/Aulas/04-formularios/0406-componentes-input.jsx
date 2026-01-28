import { useState } from "react";
import Input from "./Form/Input";

export default function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input
        type="email"
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        required
      />
      <button>Enviar</button>
    </form>
  );
}
