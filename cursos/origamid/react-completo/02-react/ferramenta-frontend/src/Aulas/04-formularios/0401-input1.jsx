import { useState } from "react";

const Exemplo1 = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <p>{nome}</p>
      <button>Enviar</button>
    </form>
  );
};

// Outra forma de trabalhar com forms, 1 estado com objeto com várias propriedades, ao invés de 1 estado pra cada input do form por exemplo...
const Exemplo2 = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  const id = "nome";
  const value = "Gabriel";

  /* Exemplo usar [id] na função abaixo handleChange */
  const obj1 = { id: value };
  const obj2 = { [id]: value };

  console.log(obj1); // { id: "Gabriel" } -> a chave do objeto é a palavra id
  console.log(obj2); // { nome: "Gabriel" } -> a chave do objeto é o conteúdo da variável id (nome)

  function handleChange({ target }) {
    const { id, value } = target;
    // console.log(id, value)
    setForm({ ...form, [id]: value });

    // if (id === "nome") {
    //   setForm({
    //     nome: value,
    //     email: form.email,
    //   });
    // }

    // if (id === "email") {
    //   setForm({
    //     nome: form.nome,
    //     email: value,
    //   });
    // }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />
      <p>{form.nome}</p>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <p>{form.email}</p>
      <button>Enviar</button>
    </form>
  );
};

export default function App() {
  return <Exemplo2 />;
}
