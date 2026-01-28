import { nanoid } from "nanoid";
import logo from "../../assets/logo.svg";
import { useRef, useState } from "react";
import Item from "./Item";

export type Item = {
  id: string;
  name: string;
  quantity: string;
  completed: boolean;
};

const itemsTest = [
  {
    id: nanoid(),
    name: "Leite em Pó",
    quantity: "3 caixas",
    completed: false,
  },
  {
    id: nanoid(),
    name: "Banana",
    quantity: "1 dúzia",
    completed: true,
  },
  {
    id: nanoid(),
    name: "Laranja",
    quantity: "1 dúzia",
    completed: true,
  },
  {
    id: nanoid(),
    name: "Maçã",
    quantity: "1 dúzia",
    completed: true,
  },
];

function AppCestari() {
  const [items, setItems] = useState<Item[]>(itemsTest);

  const inputRef = useRef<HTMLInputElement>(null);

  const completedItems = items.filter((item) => item.completed);
  const notCompletedItems = items.filter((item) => !item.completed);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // pegar nome e quantidade que vêm no formulário
    const formEl = event.currentTarget;
    const formData = new FormData(formEl); // api web

    const name = formData.get("name") as string;
    const quantity = formData.get("quantity") as string;

    // construir um Item (objeto Item)
    const item: Item = {
      id: nanoid(),
      name,
      quantity,
      completed: false,
    };

    // inserir no estado
    const newItems = [item, ...items];
    setItems(newItems);

    // resetar o form (apagar os campos do formulário)
    formEl.reset();

    // dar foco no primeiro input
    // if (inputRef.current) {
    //   inputRef.current.focus();
    // }
    inputRef.current?.focus();
  }

  function handleClickComplete(id: string) {
    // pegar o item correspondente e marcar o completed como o oposto
    const newItems = items.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }

      return item;
    });

    // setar o novo estado
    setItems(newItems);
  }

  // function toggleItemCompleted(id: string) {
  //   setItems((prev) =>
  //     prev.map((item) =>
  //       item.id === id ? { ...item, completed: !item.completed } : item
  //     )
  //   );
  // }

  function handleClickDelete(id: string) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  return (
    <main className="max-w-2xl px-6 py-12 pb-20 mx-auto my-10 bg-white md:my-20 md:px-32 md:rounded-3xl">
      <header className="text-center">
        <img src={logo} alt="logotipo" className="mx-auto" />
        <h1 className="mt-4 text-3xl font-medium font-display">
          Lista de Compras
        </h1>
        <p className="text-sm text-slate-500">
          Facilite sua ida ao supermercado!
        </p>
        <hr className="w-1/3 mx-auto mt-6 mb-8" />
      </header>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <div className="shrink">
          <label htmlFor="name" className="block text-xs text-slate-400">
            Item
          </label>
          <input
            ref={inputRef}
            type="text"
            id="name"
            name="name"
            className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
          />
        </div>
        <div className="shrink">
          <label htmlFor="quantity" className="block text-xs text-slate-400">
            Quantidade
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
          />
        </div>
        <button className="self-end shrink h-10 px-4 font-extrabold text-white rounded-lg bg-fuchsia-300">
          +
        </button>
      </form>
      <section className="mt-10 space-y-3 ">
        {notCompletedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleClickComplete={handleClickComplete}
            handleClickDelete={handleClickDelete}
          />
        ))}
      </section>
      <section className="mt-16 space-y-3">
        <h2 className="mb-10 text-3xl text-center font-display">
          Itens já comprados
        </h2>
        {completedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleClickComplete={handleClickComplete}
            handleClickDelete={handleClickDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default AppCestari;
