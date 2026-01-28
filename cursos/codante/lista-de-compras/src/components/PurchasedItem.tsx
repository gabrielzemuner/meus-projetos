import trash from "../assets/trash.svg";
import done from "../assets/done.svg";
import type { Item } from "../lib/types";

type PurchasedItemProps = {
  item: Item;
  removeItem: (item: Item) => void;
};

export default function PurchasedItem({
  item,
  removeItem,
}: PurchasedItemProps) {
  const { name, quantity } = item;

  return (
    <>
      <article className="flex w-full gap-4">
        <img src={done} alt="#" />
        <div className="flex-1">
          <p className="line-through text-slate-400">{name}</p>
          <p className="text-sm line-through text-slate-400">{quantity}</p>
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
