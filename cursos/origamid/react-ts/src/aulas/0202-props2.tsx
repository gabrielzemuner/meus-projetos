import React from "react";

// type ButtonProps1 = {
//   tamanho?: string;
//   children: React.ReactNode;
//   onClick?: () => void;
// };

// opção 2 sem a anotação do children pq estamos usando uma opção disponível pelo próprio react (PropsWithChildren)
// type ButtonProps2 = React.PropsWithChildren<{
//   tamanho?: string;
//   onClick?: () => void;
// }>;

type ButtonProps3 = React.ComponentProps<"button"> & {
  tamanho?: string;
};

const Button = ({ tamanho, children, ...props }: ButtonProps3) => {
  return (
    <button style={{ fontSize: tamanho }} {...props}>
      {children}
    </button>
  );
};

export default function Aula0202Props2() {
  const [total, setTotal] = React.useState(0);

  function incrementar() {
    setTotal((prev) => prev + 1);
  }
  return (
    <div>
      <p>Total: {total}</p>
      <Button className="btn" tamanho="1.25rem" onClick={incrementar}>
        Incrementar
      </Button>
    </div>
  );
}
