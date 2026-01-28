import Feed from "@/Components/Feed/Feed";
import Head from "@/Components/Helper/Head";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { user } = useParams();
  if (!user) return null; // type narrowing de componente react -> precisa retornar null ao invés de apenas 'if (!user) return;'

  return (
    <section className="container mainContainer">
      <Head title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
}
