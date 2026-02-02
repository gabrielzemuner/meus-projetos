type InputProps = React.ComponentProps<"input"> & {
  label: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

export default function Input({ label, setState, ...props }: InputProps) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        name={label}
        onChange={({ currentTarget }) => setState(currentTarget.value)}
        type="text"
        className="text-black"
        {...props}
      />
    </div>
  );
}
