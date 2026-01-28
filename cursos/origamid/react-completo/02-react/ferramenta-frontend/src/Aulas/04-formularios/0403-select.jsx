import { useState } from "react";

const selectFields = [
  {
    value: "notebook",
    text: "Notebook",
  },
  {
    value: "smartphone",
    text: "Smartphone",
  },
  {
    value: "tablet",
    text: "Tablet",
  },
];

export default function App() {
  const [select, setSelect] = useState("");

  // function handleSelect(event) {
  //   setSelect(event.target.value)
  //   console.log(event.target.value)
  // }

  return (
    <form>
      <select
        id="produtos"
        value={select}
        onChange={({ target }) => setSelect(target.value)}
        // onChange={handleSelect}
      >
        <option disabled value="">
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <div></div>

      <select
        id="produtos"
        value={select}
        onChange={({ target }) => setSelect(target.value)}
        // onChange={handleSelect}
      >
        <option disabled value="">
          Selecione
        </option>
        {selectFields.map(({ value, text }, index) => (
          <option key={index} value={value}>{text}</option>
        ))}
      </select>
      <p>{select}</p>
    </form>
  );
}
