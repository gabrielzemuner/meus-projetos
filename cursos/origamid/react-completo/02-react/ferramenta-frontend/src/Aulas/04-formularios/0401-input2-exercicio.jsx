// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

import { useState } from "react";

// Essa é a função utilizado para realizar o POST
// fetch("https://ranekapi.origamid.dev/json/api/usuario", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

// Minha resolução do exercício
const AppMinhaResolucao = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });
  const [responseApi, setResponseApi] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit");
    // console.log(form)

    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    })
      .then((response) => {
        response.json();
        setResponseApi(response);
      })
      .then((json) => json);
  };

  console.log(responseApi);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setForm({ ...form, [id]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input id="nome" label="Nome" value={form.nome} onChange={handleChange} />
      <Input
        id="email"
        label="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <Input
        id="senha"
        label="Senha"
        type="password"
        value={form.senha}
        onChange={handleChange}
      />
      <Input id="cep" label="Cep" value={form.cep} onChange={handleChange} />
      <Input id="rua" label="Rua" value={form.rua} onChange={handleChange} />
      <Input
        id="numero"
        label="Numero"
        value={form.numero}
        onChange={handleChange}
      />
      <Input
        id="bairro"
        label="Bairro"
        value={form.bairro}
        onChange={handleChange}
      />
      <Input
        id="cidade"
        label="Cidade"
        value={form.cidade}
        onChange={handleChange}
      />
      <Input
        id="estado"
        label="Estado"
        value={form.estado}
        onChange={handleChange}
      />
      {responseApi && <p>Formulário enviado</p>}
      <button>Enviar</button>
    </form>
  );
};

const Input = ({ label, id, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} {...props} />
    </>
  );
};

// Resolução Professor
const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "Cep",
    type: "text",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
  },
  {
    id: "numero",
    label: "Numero",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];

// reduce -> callback tem 2 valores -> valor anterior e valor atual
// dica: usar a lógica abaixo pra colocar o itens que serão usados no estado form, com o objetivo de evitar erros no código...
const forms = formFields.reduce((acc, field) => {
  // console.log(acc);
  return {
    ...acc,
    [field.id]: "",
  };
}, {});
console.log("forms", forms);

// reduce mais "simples"
const forms2 = formFields.reduce((acc, field) => {
  acc[field.id] = "";
  // console.log(acc)
  return acc;
}, {});
console.log("forms2", forms2);

// Object.fromEntries // converte array para objeto - opção que eu prefiro utilizar
const initialForm = Object.fromEntries(
  formFields.map((field) => [field.id, ""])
);
console.log("initialForm", initialForm);

const App = () => {
  const [form, setForm] = useState(initialForm);
  const [response, setResponse] = useState();

  const handleChange = ({ target }) => {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit");
    // console.log(form)

    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* // podemos desestruturar também ex: (field) -> ({(id, label, type)}) */}
      {formFields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <input
            type={field.type}
            id={field.id}
            value={form[field.id]}
            onChange={handleChange}
          />
        </div>
      ))}
      {response && response.ok && <p>Formulário enviado</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
