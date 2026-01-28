import React from "react";

type ButtonProps = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ total, setTotal }: ButtonProps) => {
  return (
    <button onClick={() => setTotal((t) => t + 1)}>Incrementar {total}</button>
  );
};

export default function Aula0203InterfaceseTipos2() {
  const [total, setTotal] = React.useState(0);
  return (
    <div>
      <p>Total: {total}</p>
      <Button total={total} setTotal={setTotal} />
    </div>
  );
}
