import { Link } from "react-router-dom";
import Head from "../0605-head";

export default function Home() {
  return (
    <div>
      <Head title="Home" description="Essa é a descrição da home" />
      <h1>Home</h1>
      <p>Essa é a Home</p>
      <Link to="produto/notebook">Notebook</Link>{" "}
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
}
