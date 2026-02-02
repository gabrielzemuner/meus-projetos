import { createContext, PropsWithChildren, useState } from "react";

interface ContadorContextProps {
  numero: number;
  incrementar: () => void;
  decrementar: () => void;
  setNumero: React.Dispatch<React.SetStateAction<number>>;
}

const ContadorContext = createContext<ContadorContextProps>({} as any);

export function ContadorProvider(props: PropsWithChildren) {
  const [numero, setNumero] = useState(0);

  function incrementar() {
    setNumero(numero + 1);
  }

  function decrementar() {
    setNumero(numero - 1);
  }

  return (
    <ContadorContext.Provider
      value={{ numero, incrementar, decrementar, setNumero }}
    >
      {props.children}
    </ContadorContext.Provider>
  );
}

export default ContadorContext;
