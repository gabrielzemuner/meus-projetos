import { useContext, useEffect, useRef } from "react";
import Button from "./Button";
import context from "../context/context";

type HeaderCardProps = {
  // bgColor: string;
  // setBgColor: React.Dispatch<React.SetStateAction<string>>;
  handleChangeQuoteClick: React.MouseEventHandler<HTMLButtonElement>;
  handleChangeColorClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function HeaderCard({
  // bgColor,
  // setBgColor,
  handleChangeQuoteClick,
  handleChangeColorClick,
}: HeaderCardProps) {
  const { bgColor, setBgColor } = useContext(context);
  const quoteButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    quoteButtonRef.current?.focus();
  }, []);

  function handleInputColor(e: React.ChangeEvent<HTMLInputElement>) {
    setBgColor(e.currentTarget.value);
  }

  return (
    <div className="w-full max-w-4xl px-10 py-6 mx-auto bg-white border-2 border-white rounded-lg bg-opacity-15 ">
      <h1
        className="text-3xl font-bold brightness-50 md:text-7xl font-display "
        style={{ color: bgColor }}
      >
        Frases Motivacionais
      </h1>
      <Button ref={quoteButtonRef} onClick={handleChangeQuoteClick}>
        Me dê uma dose de ânimo
      </Button>
      <Button
        className="ml-2 text-3xl bg-red-600 bg-opacity-100"
        onClick={handleChangeColorClick}
      >
        Trocar a Cor
      </Button>
      <Button disabled>Teste Disabled</Button>
      <label
        htmlFor="color-changer"
        className="px-4 py-2 mt-10 font-bold text-white bg-transparent bg-gray-800 border-2 border-white rounded bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ml-2 inline-flex items-center justify-center cursor-pointer"
      >
        <span>Escolha uma cor</span>
        <input
          type="color"
          name="color-changer"
          id="color-changer"
          className="w-0 h-0"
          // onChange={(e) => setBgColor(e.currentTarget.value)}
          onChange={handleInputColor} // 2 opções para chamar o onChange. Porém, desta forma, ao definir a função no início do componente, necessário passar o tipo do event (React.ChangeEvent<HTMLInputElement>)
        />
      </label>
    </div>
  );
}
