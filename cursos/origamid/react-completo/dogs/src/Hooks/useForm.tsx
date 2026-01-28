import { useState } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um e-mail válido.",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/,
    message: "A senha precisa ser forte",
  },
  number: {
    regex: /^\d+$/, // só aceita dígitos
    message: "Utilize números apenas.",
  },
};

// type FieldType = "email" | "cpf" | "outros..."
type FieldType = keyof typeof types | false;

export default function useForm(type?: FieldType) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function validate(value: string) {
    if (type === false) {
      return true;
    }

    const typeConfig = type ? types[type] : undefined;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (typeConfig && !typeConfig.regex.test(value)) {
      setError(typeConfig.message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (error) {
      validate(target.value);
    }

    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}
