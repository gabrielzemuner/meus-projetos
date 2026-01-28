// onBlur -> sempre que o campo fica fora de foco -> melhor momento pra validar campos de um formulário
// podemos fazer validação com javascript e regex...

// o exemplo desta aula não é o mais otimizado, pois teria que criar uma função validate pra cada input... vamos criar um hook personalizado pra isso

import Input from "./Form/Input3";
import useForm from "./Hooks/useForm";

export default function App() {
  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm(); // exemplo de input que não precisa de validação regex, mas tem a validaçào se o campo estiver em branco -> nome pode ser qualquer coisa...
  const sobrenome = useForm(false); // exemplo de input que validação deve ser ignorada

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log("Enviou");
    } else {
      console.log("Não enviar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="nome" type="text" {...nome} />
      <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input label="Email" id="email" type="email" {...email} />
      <button>Enviar</button>
    </form>
  );
}
