import { useUi } from "./UiContext";

export default function Content() {
  const { dark } = useUi();
  return <h1>{dark ? "dark" : "light"}</h1>;
}
