import { useEffect, useState } from "react";

export default function useLocalStorage(
  key: string,
  initial: string,
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : initial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  //   return [state, setState] as const; // poderiamos usar as const ao invés de passar o retorno da função como : [string, React.Dispatch<React.SetStateAction<string>>]
  return [state, setState];
}
