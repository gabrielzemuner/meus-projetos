import { useEffect } from "react";

// Componente personalizado pra manipular title e description do html com javascript puro
// Precisaria trabalhar em lógica pra quando acessar uma página sem <Head /> trazer um título padrão...  

export default function Head(props) {
  useEffect(() => {
    document.title = "Dogs | " + props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description);
  }, [props]);
  return <></>;
}
