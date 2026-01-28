import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  // Ler do 'localStorage' na montagem
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : initialValue;
    // return local ?? initialValue;
  });

  // Sempre que state mudar, salvar novo valor no 'localStorage'
  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
