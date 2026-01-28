import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Rotas/Home";
import Sobre from "./Rotas/Sobre";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import Login from "./Rotas/Login";
import Produto from "./Rotas/Produto";
import ProdutoDescricao from "./Rotas/ProdutoDescricao";
import ProdutoAvaliacao from "./Rotas/ProdutoAvaliacao";
import ProdutoCustomizado from "./Rotas/ProdutoCustomizado";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />}>
          {/* rotas aninhadas */}
          <Route path="" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
