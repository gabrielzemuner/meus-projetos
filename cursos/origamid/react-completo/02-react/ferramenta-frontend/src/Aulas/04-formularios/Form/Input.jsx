export default function Input({ id, label, setValue, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id} // o id precisa ser utilizado aqui pois está desestruturado em props (ou seja, retirado de ...props) e também é utilizado junto com o htmlFor do <label>
        name={id}
        // value={value} // não precisa ser utilizado aqui, pois é uma propriedade padrão do input (estará dentro de ...props)
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
}
