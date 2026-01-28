import { createContext } from "react";
import { Quote } from "../lib/types";

type InitialState = {
  bgColor: string;
  quote: Quote | null;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  setQuote: React.Dispatch<React.SetStateAction<Quote | null>>;
};

const INITIAL_STATE = {
  bgColor: "#666",
} as InitialState; // tipagem do contexto sem passar todos os dados obrigatórios. "Gambiarra" para o React como se tivessemos informando que vamos ter os dados mas não estamos passando ele.

const context = createContext(INITIAL_STATE);

export default context;
