import { useContext } from "react";
import QuoteCard from "./components/QuoteCard";
import HeaderCard from "./components/HeaderCard";
import context from "./context/context";

function App() {
  // const [quote, setQuote] = useState<Quote | null>(null);
  // const [bgColor, setBgColor] = useState("#666");

  const { quote, bgColor } = useContext(context);

  return (
    <main className="w-full min-h-screen " style={{ backgroundColor: bgColor }}>
      <section className="container px-10 py-20 mx-auto text-center">
        {/* para o HeaderCard não precisamos mais passar bgColor e setBgColor pois eles estão dentro do context.  */}
        <HeaderCard />
        {quote && <QuoteCard />}
      </section>{" "}
    </main>
  );
}

export default App;
