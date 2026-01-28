import { PropsWithChildren, useState } from "react";
import context from "./context";
import { Quote } from "../lib/types";

export default function ContextProvider({ children }: PropsWithChildren) {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [bgColor, setBgColor] = useState("#666");

  return (
    <context.Provider value={{ bgColor, quote, setBgColor, setQuote }}>
      {children}
    </context.Provider>
  );
}
