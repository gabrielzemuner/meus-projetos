import { useEffect, useState } from "react";
import Title from "../../components/Title";

function user() {
  return {
    nome: "André",
    profissao: "Designer",
  };
}

type User = {
  nome: string;
  profissao: string;
};

export default function UseState01() {
  const [data, setData] = useState<null | User>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setData(user());
    }, 1000);
  }, []);
  return (
    <div>
      <Title title="useState #1" />
      <p>Total: {total}</p>
      <div>
        <Button incrementar={setTotal} />
      </div>
      {data !== null && (
        <div>
          {data.nome}: {data.profissao}
        </div>
      )}
    </div>
  );
}

type ButtonProps = {
  incrementar: React.Dispatch<React.SetStateAction<number>>;
};

function Button({ incrementar }: ButtonProps) {
  return (
    <button onClick={() => incrementar((n) => n + 1)} className="btn-primary">
      Incrementar
    </button>
  );
}
