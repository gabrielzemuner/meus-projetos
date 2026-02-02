import { useUi } from "./UiContext";

export default function Header() {
  const { setDark } = useUi();
  return <button onClick={() => setDark((prev) => !prev)}>Mode</button>;
}
