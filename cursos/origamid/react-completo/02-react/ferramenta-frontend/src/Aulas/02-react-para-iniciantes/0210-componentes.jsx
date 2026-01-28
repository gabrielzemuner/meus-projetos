import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Form from "../Components/Form/Form";

const Teste = () => {
  const active = false;
  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};

export default function Componentes() {
  return (
    <>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </>
  );
}
