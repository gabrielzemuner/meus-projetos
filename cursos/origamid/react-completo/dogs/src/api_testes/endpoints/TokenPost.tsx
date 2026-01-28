import { useState } from "react";

// token é o que precisamos pra autenticar o usuário -> saber quem está logando no sistema
// somente usuário autenticado pode fazer postagem no site.

export default function TokenPost() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setToken(json.token);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Enviar</button>
      <p style={{ wordBreak: "break-all" }}>{token}</p>
    </form>
  );
}
