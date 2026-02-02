import Carrinho from "@/components/loja/Carrinho";
import Catalogo from "@/components/loja/Catalogo";
import { CarrinhoProvider } from "@/context/CarrinhoContext";
import { CatalogoProvider } from "@/context/CatalogoContext";

export default function Loja() {
  return (
    <CarrinhoProvider>
      <CatalogoProvider>
        <div className="flex flex-col p-7 gap-4">
          <Carrinho />
          <Catalogo />
        </div>
      </CatalogoProvider>
    </CarrinhoProvider>
  );
}
