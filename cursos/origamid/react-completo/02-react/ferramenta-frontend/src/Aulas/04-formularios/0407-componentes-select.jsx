import { useState } from "react";
import Select from "./Form/Select";

export default function App() {
  const [produto, setProduto] = useState("");

  return (
    <form>
      <Select
        options={["Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
    </form>
  );
}
