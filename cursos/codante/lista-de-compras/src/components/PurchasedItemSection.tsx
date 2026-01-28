import type { Item } from "../lib/types";
import PurchasedItem from "./PurchasedItem";

type PurchasedItemSectionProps = {
  items: Item[];
  removeItem: (item: Item) => void;
};

export default function PurchasedItemSection({
  items,
  removeItem,
}: PurchasedItemSectionProps) {
  const hasItems = items.length > 0;
  if (!hasItems) return null;

  return (
    <section className="mt-16 space-y-3">
      <h2 className="mb-10 text-3xl text-center font-display">
        Itens já comprados
      </h2>
      {items.map((item, index) => (
        <PurchasedItem key={index} item={item} removeItem={removeItem} />
      ))}
    </section>
  );
}
