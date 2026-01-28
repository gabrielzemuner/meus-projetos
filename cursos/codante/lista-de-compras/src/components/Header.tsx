import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="text-center">
      <img src={logo} alt="logotipo" className="mx-auto" />
      <h1 className="mt-4 text-3xl font-medium font-display">
        Lista de Compras
      </h1>
      <p className="text-sm text-slate-500">
        Facilite sua ida ao supermercado!
      </p>
      <hr className="w-1/3 mx-auto mt-6 mb-8" />
    </header>
  );
}
