import Title from "../../components/Title";
import Content from "./Content";
import Header from "./Header";
import { UiContextProvider } from "./UiContext";

export default function UseContext01() {
  return (
    <div>
      <UiContextProvider>
        <Title title="useContext #1" subtitle="Contextos Globais" />
        <Header />
        <Content />
      </UiContextProvider>
    </div>
  );
}
