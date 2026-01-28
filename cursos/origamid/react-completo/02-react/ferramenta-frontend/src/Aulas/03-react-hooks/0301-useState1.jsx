import { useState } from "react";

const Exemplo1 = () => {
  const [ativo, setAtivo] = useState(false);
  const [dados, setDados] = useState({ nome: "Andre", idade: 30 });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: "Possui Faculdade" });
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>
    </div>
  );
};

const ButtonModal = ({ setModal }) => {
  return <button onClick={() => setModal(true)}>Abrir</button>;
};

const Modal = ({ modal, setModal }) => {
  if (modal)
    return (
      <div>
        Esse é um modal.
        <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );
  return null;
};

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div>{modal ? "Modal Aberto" : "Modal Fechado"}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
}
