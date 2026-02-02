import Title from "../../components/Title";
import Content2 from "./Content2";
import Header2 from "./Header2";
import { UserContextProvider } from "./UserContext";

// Utilize a API: https://data.origamid.dev/usuarios/1
// 1 - Crie um UserContext
// 2 - Use o useFetch dentro do UserContext para exportar data, loading e error
// 3 - Crie dois componentes: Header.tsx e Content.tsx e adicine ambos ao App.tsx
// 4 - Mostre o nome da pessoa em Header.tsx e as preferências em Content.tsx

export default function UseContext02() {
  return (
    <div>
      <UserContextProvider>
        <Title title="useContext #2" subtitle="Exercício 😅" />
        <Header2 />
        <Content2 />
      </UserContextProvider>
    </div>
  );
}
