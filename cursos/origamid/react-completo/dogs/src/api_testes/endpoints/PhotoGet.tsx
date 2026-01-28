import { useState } from "react";

export default function PhotoGet() {
  const [id, setId] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // fetch("https://dogsapi.origamid.dev/json/api/photo")
    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
}
