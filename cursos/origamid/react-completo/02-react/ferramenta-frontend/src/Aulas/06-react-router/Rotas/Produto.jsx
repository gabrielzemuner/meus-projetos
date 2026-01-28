import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";

export default function Produto() {
  const params = useParams();
  //   console.log(params)
  const location = useLocation();
  //   console.log(location)

  const search = new URLSearchParams(location.search);
  console.log(search.get("memoria"));

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
