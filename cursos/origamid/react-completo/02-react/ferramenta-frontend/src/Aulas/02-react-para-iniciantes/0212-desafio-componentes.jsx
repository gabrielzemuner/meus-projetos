// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="produtos">Produtos</a>
        </li>
      </ul>
    </header>
  );
};

const Titulo = ({ children }) => {
  return <h3 style={{ color: "green" }}>{children}</h3>;
};

const Home = () => {
  return (
    <section>
      <Titulo>Home</Titulo>
      <p>Essa é a home do site</p>
    </section>
  );
};

const Produtos = () => {
  return (
    <section> 
      <Titulo>Produtos</Titulo>
      {produtos.map((produto) => (
        // <Produto key={produto.nome} nome={produto.nome} propriedades={produto.propriedades} />
        <Produto key={produto.nome} {...produto} /> // '...produto' espalha todas as chaves do objeto como props
      ))}
    </section>
  );
};

const Produto = ({ nome, propriedades }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        margin: "1rem 0",
      }}
      key={nome}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default function Desafio() {
  const { pathname } = window.location;
  //   console.log(pathname);

  let Pagina;
  // ao invés do if, poderia ser feito com switch, operador ternário etc...
  if (pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <section>
      <Header />
      <Pagina />
      {/* {pathname == "/" ? <Home /> : pathname == "/produtos" ? <Produtos /> : ""} */}
    </section>
  );
}
