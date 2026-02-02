import React from "react";

type ButtonProps = {
  tamanho?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button style={{ fontSize: props.tamanho }} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default function Aula0202Props1() {
  const [total, setTotal] = React.useState(0);

  function incrementar() {
    setTotal((prev) => prev + 1);
  }
  return (
    <div>
      <p>Total: {total}</p>
      <Button tamanho="1.25rem" onClick={incrementar}>
        Incrementar
      </Button>
    </div>
  );
}
