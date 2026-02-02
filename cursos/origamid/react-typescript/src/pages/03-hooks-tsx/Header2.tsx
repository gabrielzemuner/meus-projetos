import { useUser } from "./UserContext";

export default function Header2() {
  const { data } = useUser();

  if (!data) return null;
  return <div>{data.nome}</div>;
}
