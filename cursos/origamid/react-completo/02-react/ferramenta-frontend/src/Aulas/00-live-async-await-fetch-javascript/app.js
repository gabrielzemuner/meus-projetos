import { render } from "./render.js";

// fetch("https://ranekapi.origamid.dev/json/api/produto")
//   .then((response) => response.json())
//   .then((json) => render(json));

async function fetchData(url) {
  const response = await fetch(url);
  const json = await response.json();
  render(json);
  // console.log(json);
}

fetchData("https://ranekapi.origamid.dev/json/api/produto");
