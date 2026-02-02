import { useContext } from "react";
import Area from "../template/Area";
import CarrinhoVazio from "./CarrinhoVazio";
import CarrinhoContext from "@/context/CarrinhoContext";

export default function Carrinho() {
  const { itens } = useContext(CarrinhoContext);
  return (
    <Area titulo="Carrinho" cor="green">
      {itens.length === 0 ? <CarrinhoVazio /> : <div>Tem itens...</div>}
    </Area>
  );
}
