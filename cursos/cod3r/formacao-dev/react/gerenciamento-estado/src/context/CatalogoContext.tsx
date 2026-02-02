import Produto from "@/data/model/Produto";
import { createContext, PropsWithChildren } from "react";
import produtos from "@/data/constants/produtos";

interface CatalogoContextProps {
  produtos: Produto[];
}

const CatalogoContext = createContext<CatalogoContextProps>({} as any);

export function CatalogoProvider(props: PropsWithChildren) {
  return (
    <CatalogoContext.Provider value={{ produtos }}>
      {props.children}
    </CatalogoContext.Provider>
  );
}

export default CatalogoContext;
