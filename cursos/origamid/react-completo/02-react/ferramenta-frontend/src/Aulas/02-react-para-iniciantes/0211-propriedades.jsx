// Exemplo propriedades, children...
const Titulo = ({ cor, texto, children }) => {
  return (
    <div>
      <h1 style={{ color: cor }}>{texto}</h1>
      <h2>{children}</h2>
    </div>
  );
};

const Form = () => {
  return (
    <form>
      <Input id="email" label="Email" required />
      {/* o spread {...props} permite usar atributos/propriedades originais do html em um componente, igual ex acima: required */}
      <Input id="password" type="password" label="Password" />
      {/* por conta do spread {...props}, caso a gente passe as mesmas propriedades definidas, os valores serão sobrescritos. Ex: o type="text" está como padrão, mas se no componente passarmos type="password", o valor de type será sobrescrito. */}
      <Button />
    </form>
  );
};

const Input = ({ label, id, ...props }) => {
  console.log(props);
  return (
    <div style={{ margin: "1rem 0" }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

const Button = () => {
  return <button>Clique</button>;
};

export default function Propriedades() {
  return (
    <div>
      <Form />
    </div>
  );
}
