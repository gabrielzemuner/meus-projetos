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

import { Quote } from "../lib/types";
import Card from "./Card";

type QuoteCardProps = {
  quote: Quote;
};

export default function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <Card>
      <p className="font-serif text-3xl italic leading-normal text-gray-700 font-extralight">
        {quote.quote}
      </p>
      <p className="mt-10 text-2xl text-black">-- {quote.author}</p>
    </Card>
  );
}
