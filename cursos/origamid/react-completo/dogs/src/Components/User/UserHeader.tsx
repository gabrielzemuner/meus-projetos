import UserHeaderNav from "@/Components/User/UserHeaderNav";
import { useLocation } from "react-router-dom";
import styles from "./UserHeader.module.css";

const titles = [
  {
    pathname: "/conta",
    title: "Minha Conta",
  },
  {
    pathname: "/conta/estatisticas",
    title: "Estatísticas",
  },
  {
    pathname: "/conta/postar",
    title: "Poste Sua Foto",
  },
];

export default function UserHeader() {
  const { pathname } = useLocation();
  const current = titles.find((item) => item.pathname === pathname);
  const title = current?.title ?? "Página Incorreta";

  // useEffect(() => {
  //   const location = useLocation();
  //   const { pathname } = location;

  //   switch (pathname) {
  //     case "/conta/postar":
  //       setTitle("Poste Sua Foto");
  //       break;
  //     case "/conta/estatisticas":
  //       setTitle("Estatísticas");
  //       break;
  //     default:
  //       setTitle("Minha Conta");
  //   }
  // }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}
