import React from "react";

function Checkbox({ label }: { label: string }) {
  const [value, setValue] = React.useState(false);

  // Forma 1 — tipando só o parâmetro (mais comum em funções nomeadas)
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.checked);
  }

  // Forma 2 — tipando a função inteira (mais comum em consts)
  const handleChange2: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.currentTarget.checked);
  };

  // Forma 3 (melhor forma de anotação) - usar a função anônima diretamente no onChange - pra funções simples (resolver em 1 linha) isso funciona bem, agora pra funções mais complexas com mais de 1 linha, melhor definir no corpo do componente mesmo e tipar de forma explícita (iguais exemplos handleChange/handleChange2)

  return (
    <label
      style={{
        padding: "1rem",
        border: value ? "2px solid #8D2" : "2px solid #f70",
      }}
    >
      <input
        type="checkbox"
        checked={value}
        onChange={({ currentTarget }) => setValue(currentTarget.checked)}
      />
      {label}
    </label>
  );
}

export default function Aula0204Eventos() {
  return (
    <div>
      <Checkbox label="Termos e Condições" />
    </div>
  );
}
