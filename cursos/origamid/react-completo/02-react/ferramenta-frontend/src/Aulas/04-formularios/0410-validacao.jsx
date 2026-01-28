// onBlur -> sempre que o campo fica fora de foco -> melhor momento pra validar campos de um formulário
// podemos fazer validação com javascript e regex...

// o exemplo desta aula não é o mais otimizado, pois teria que criar uma função validate pra cada input... vamos criar um hook personalizado pra isso

import { useState } from "react";
import Input from "./Form/Input2";

export default function App() {
  const [cep, setCep] = useState("");
  const [error, setError] = useState(null);

  function validateCep(value) {
    const regex = /^\d{5}-?\d{3}$/.test(value); // retorna true ou false

    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!regex) {
      setError("Preencha um CEP válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    // const regex = /^\d{5}-?\d{3}$/;
    // const validacao = regex.test(target.value);
    // console.log(validacao);

    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log("Enviou");
    } else {
      console.log("Não enviar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
}
