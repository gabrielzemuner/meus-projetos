// input utilizado na aula de hook personalizado useForm (0411), mas não entendi direito as alterações...

export default function Input({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      {error && <p>{error}</p>}
    </>
  );
}
