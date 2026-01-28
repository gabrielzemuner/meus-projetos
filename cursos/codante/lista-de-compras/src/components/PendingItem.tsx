import type { Item } from "../lib/types";
import trash from "../assets/trash.svg";
import todo from "../assets/todo.svg";

type PendingItemProps = {
  item: Item;
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
};

export default function PendingItem({
  item,
  addItem,
  removeItem,
}: PendingItemProps) {
  const { name, quantity } = item;

  return (
    <>
      <article className="flex w-full gap-4">
        <img
          src={todo}
          alt="#"
          onClick={() => addItem(item)}
          className="cursor-pointer"
        />
        <div className="flex-1">
          <p>{name}</p>
          <p className="text-sm text-slate-400">{quantity}</p>
        </div>
        <img
          src={trash}
          alt="ícone de lixeira"
          className="justify-self-end cursor-pointer"
          onClick={() => removeItem(item)}
        />
      </article>
      <hr />
    </>
  );
}
