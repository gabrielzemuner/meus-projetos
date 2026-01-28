// interface QuoteCardProps {
//   quote: {
//     quote: string;
//     author: string;
//     id: number;
//   };
// }

// type QuoteCardProps = {
//   quote: {
//     quote: string;
//     author: string;
//     id: number;
//   };
// };

import { useContext } from "react";
import Card from "./Card";
import context from "../context/context";

export default function QuoteCard() {
  const { quote } = useContext(context);
  return (
    <Card>
      <p className="font-serif text-3xl italic leading-normal text-gray-700 font-extralight">
        {quote?.quote}
      </p>
      <p className="mt-10 text-2xl text-black">-- {quote?.author}</p>
    </Card>
  );
}
