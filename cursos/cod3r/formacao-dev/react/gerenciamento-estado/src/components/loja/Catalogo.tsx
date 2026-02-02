import Area from "../template/Area";
import ProdutoCard from "./ProdutoCard";
import { useContext } from "react";
import CatalogoContext from "@/context/CatalogoContext";

export default function Catalogo() {
  const { produtos } = useContext(CatalogoContext);
  function renderizarProdutos() {
    return produtos.map((produto) => {
      return <ProdutoCard key={produto.id} produto={produto} />;
    });
  }
  return (
    <Area titulo="Catálogo" cor="purple">
      <div className="flex justify-around flex-wrap gap-4">
        {renderizarProdutos()}
      </div>
    </Area>
  );
}
