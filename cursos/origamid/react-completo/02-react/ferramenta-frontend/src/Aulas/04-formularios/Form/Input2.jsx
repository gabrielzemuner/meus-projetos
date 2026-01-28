// input alterado pra modificar o parametro onChange ao usar na aula de validação (0410)

export default function Input({ id, label, onChange, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={onChange}
        {...props}
      />
    </>
  );
}
