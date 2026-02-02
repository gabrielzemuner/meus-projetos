import Produto from "@/data/model/Produto";
import { createContext, PropsWithChildren, useState } from "react";
import ItemCarrinho from "@/data/model/ItemCarrinho";

interface CarrinhoContextProps {
  itens: ItemCarrinho[];
  adicionarItem: (produto: Produto) => void;
}

const CarrinhoContext = createContext<CarrinhoContextProps>({} as any);

export function CarrinhoProvider(props: PropsWithChildren) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  function adicionarItem(produto: Produto) {
    setItens([...itens, { produto, quantidade: 1 }]);
  }

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarItem,
      }}
    >
      {props.children}
    </CarrinhoContext.Provider>
  );
}

export default CarrinhoContext;
