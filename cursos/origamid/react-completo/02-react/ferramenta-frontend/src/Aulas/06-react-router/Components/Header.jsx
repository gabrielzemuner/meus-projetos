import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
// import "./Header.css"; // se usarmos style inline, não precisamos do css importado

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    console.log("Mudou a rota");
  }, [location]);
  return (
    <nav>
      {/* <Link to="/">Home</Link> | <Link to="sobre">Sobre</Link> */}
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? { color: "tomato" } : undefined)}
        end
      >
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink
        to="sobre"
        style={({ isActive }) => (isActive ? { color: "tomato" } : undefined)}
      >
        Sobre
      </NavLink>{" "}
      |{" "}
      <NavLink
        to="login"
        style={({ isActive }) => (isActive ? { color: "tomato" } : undefined)}
      >
        Login
      </NavLink>
    </nav>
  );
}
