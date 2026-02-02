import React from "react";

/* Exercício
1. Crie um componente Input
2. Ele deve retornar <label> e <input>, dentro de uma <div>
3. Recebe uma propriedade chamada label
4. A propriedade deve ser usada como htmlFor (label), name (input), id (input) e como conteúdo de <label>
5. Permita o uso de qualquer propriedade de input no componente Input
6. Adicione 1rem de marginBottom na <div>
*/

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  id: string;
};

function Input({ label, id, ...props }: InputProps) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type="text" {...props} />
    </div>
  );
}

export default function Aula0202Props3() {
  const [data, setData] = React.useState("");
  return (
    <div>
      <p>Início da Viagem: {data}</p>
      <Input id="nome" label="Nome" placeholder="Digite o seu nome" />
      <Input
        id="email"
        label="E-mail"
        type="email"
        placeholder="Digite o seu e-mail"
      />
      <Input
        id="inicio-viagem"
        label="Início da Viagem"
        type="date"
        value={data}
        onChange={(event) => setData(event.currentTarget.value)}
      />
      <Input id="horario" label="Horário" type="time" />
    </div>
  );
}
