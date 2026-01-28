// useForm para inputs de formulários

import { useState } from "react";

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Cep inválido",
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido",
  },
};

const MessageError = ({ children }) => {
  return <p style={{ color: "red" }}>{children}</p>;
};

export default function UseForm(type) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function validate(value) {
    if (type === false) return true; // input que validação deve ser ignorada

    if (value.length === 0) {
      setError(<MessageError>Preencha um valor</MessageError>);

      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(<MessageError>{types[type].message}</MessageError>);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
}
