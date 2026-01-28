import { useEffect, useRef, useState } from "react";
import "./App.css";
import { useDebouncedCallback } from "use-debounce";

function Exemplo1() {
  const [name, setName] = useState("");
  console.log("Renderizou 1");

  return (
    <div>
      <h2>Exemplo 1: Inicialização de estados com tipagem</h2>
      <label htmlFor="teste">Teste</label>
      <input
        type="text"
        name="teste"
        id="teste"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {!!name && <span>{name}</span>}
    </div>
  );
}

function Exemplo2() {
  const [people, setPeople] = useState({
    name: "Gabriel",
    age: 32,
  });

  console.log("Renderizou 2");

  // console.log(people)

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setPeople((prev) => {
  //     console.log("prev:", prev);
  //     return {
  //       ...prev,
  //       name: e.target.value,
  //     };
  //   });
  // }

  return (
    <div>
      <h2>
        Exemplo 2: Mutabilidade de objeto {"->"} função setPeople com ...prev
      </h2>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        name="name"
        id="name"
        value={people.name}
        // onChange={handleChange}
        onChange={(e) =>
          setPeople((prev) => ({ ...prev, name: e.target.value }))
        }
      />
    </div>
  );
}

const newPost = {
  id: 3,
  title: "Title 03",
};

function Exemplo3() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Title 01",
    },
    {
      id: 2,
      title: "Title 02",
    },
  ]);

  console.log("Renderizou 3");

  return (
    <div>
      <h2>Exemplo 3: Derivade States - uso desnecessário de estado</h2>
      {/* <button
        onClick={() =>
          setPosts((prev) => {
            const novo = [...prev];
            novo.push(newPost);
            return novo;
          })
        }
      >
        Adicionar novo post
      </button> */}
      <button onClick={() => setPosts((prev) => [...prev, newPost])}>
        Adicionar novo post
      </button>
      <p>Quantidade: {posts.length}</p>
    </div>
  );
}

function ExemploDebounce() {
  const [name, setName] = useState("");

  const debounced = useDebouncedCallback((value) => {
    setName(value);
  }, 300); // espera 300ms sem digitar

  console.log("Renderizou debounce");

  return (
    <>
      <h2>Exemplo Lib Debounce</h2>
      <input type="text" onChange={(e) => debounced(e.target.value)} />
      {!!name && <span>{name}</span>}
    </>
  );
}

function ExemploDebouncePuro() {
  const [form, setForm] = useState({
    name: "",
    age: "",
  });

  const timeoutRef = useRef<Record<string, number>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    clearTimeout(timeoutRef.current[name]); // limpar debounce anterior

    timeoutRef.current[name] = setTimeout(() => {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }, 300);
  }

  return (
    <>
      <h2>Exemplo Lib Debounce Puro</h2>
      <div>
        <input
          type="text"
          name="name"
          defaultValue={form.name}
          onChange={handleChange}
        />
        <span>{form.name}</span>
      </div>
      <div>
        <input
          type="text"
          name="age"
          defaultValue={form.age}
          onChange={handleChange}
        />
        <span>{form.age}</span>
      </div>
    </>
  );
}

function ExemploAPI() {
  type Repo = {
    name: string;
    description: string;
  };

  const [repos, setRepos] = useState<Repo[]>([]);
  const [search, setSearch] = useState("");

  // const filteredRepos =
  //   search.length > 0 ? repos.filter((repo) => repo.name.includes(search)) : [];
  const filteredRepos = search
    ? repos.filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      )
    : repos;

  useEffect(() => {
    fetch("https://api.github.com/users/gabrielzemuner/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data)); // forma explícita
    // .then(setRepos) // forma implícita e mais enxuta
  }, []);

  console.log("Renderizou Exemplo API");

  return (
    <>
      <h2>Exemplo API</h2>

      <div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul>
        {filteredRepos.map((repo) => (
          <li key={repo.name}>{repo.name}</li>
        ))}
      </ul>
    </>
  );
}

const API_URL = "/fe-api/api/fe/wordle-words";

function Line({ guess }) {
  const tiles = [];

  for (let i = 0; i < 5; i++) {
    const char = guess[i];
    tiles.push(
      <div key={i} className="tile">
        {char}
      </div>
    );
  }

  return <div className="line">{tiles}</div>;
}

function ReactCodingInterview() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));

  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch(API_URL);
      const words = await response.json();
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setSolution(randomWord);
    };

    fetchWord();
  }, []);

  return (
    <div>
      {guesses.map((guess) => {
        return <Line guess={guess ?? ""} />;
      })}
    </div>
  );
}

function App() {
  return (
    <>
      {/* <Exemplo1 />
      <Exemplo2 />
      <Exemplo3 />
      <ExemploDebounce />
      <ExemploDebouncePuro /> */}
      {/* <ExemploAPI /> */}
      <ReactCodingInterview />
    </>
  );
}

export default App;
