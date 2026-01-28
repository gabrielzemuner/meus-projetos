export default function Eventos() {
  function handleClick(event) {
    console.log(event.target);
  }

  function handleScroll(event) {
    console.log('evento disparado', event);
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <div style={{ height: "200vh" }}>
      <h1>Eventos React</h1>
      <div>
        <button onClick={handleClick}>Clique</button>
      </div>
      <div>
        <button onClick={(event) => alert(event.target.innerText)}>
          Função Anônima
        </button>
      </div>
    </div>
  );
}
