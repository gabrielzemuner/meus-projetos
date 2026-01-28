import { useEffect, useRef, useState } from "react";
import type { Item } from "../lib/types";
import Header from "./Header";
import PendingItemSection from "./PendingItemSection";
import PurchasedItemSection from "./PurchasedItemSection";

export default function AppGabriel() {
  const [pendingItems, setPendingItems] = useState<Item[]>([]);
  const [purchasedItems, setPurchasedItems] = useState<Item[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [pendingItems]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      name: string;
      quantity: string;
    };

    const { name, quantity } = data;

    // adicionar itens ao estado items
    setPendingItems((prev) => [
      {
        name: name,
        quantity: quantity,
      },
      ...prev,
    ]);

    // limpar form
    e.currentTarget.reset();
  };

  const addItem = (item: Item) => {
    setPendingItems((prev) => prev.filter((i) => i !== item));
    setPurchasedItems((prev) => [...prev, item]);
  };

  const removeItem = (item: Item) => {
    setPendingItems((prev) => prev.filter((i) => i !== item));
    setPurchasedItems((prev) => prev.filter((i) => i !== item));
  };

  return (
    <main className="max-w-2xl px-6 py-12 pb-20 mx-auto my-10 bg-white md:my-20 md:px-32 md:rounded-3xl">
      <Header />
      <PendingItemSection
        handleSubmit={handleSubmit}
        items={pendingItems}
        inputRef={inputRef}
        addItem={addItem}
        removeItem={removeItem}
      />
      <PurchasedItemSection items={purchasedItems} removeItem={removeItem} />
    </main>
  );
}
