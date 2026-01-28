import type { FormEventHandler, Ref } from "react";
import type { Item } from "../lib/types";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import PendingItem from "./PendingItem";

type PendingItemSectionProps = {
  items: Item[];
  handleSubmit: FormEventHandler<HTMLFormElement>;
  inputRef: Ref<HTMLInputElement>;
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
};

export default function PendingItemSection({
  items,
  handleSubmit,
  inputRef,
  addItem,
  removeItem,
}: PendingItemSectionProps) {
  return (
    <>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <div className="shrink">
          <Label htmlFor="name">Item</Label>
          <Input ref={inputRef} type="text" id="name" name="name" />
        </div>
        <div className="shrink">
          <Label htmlFor="quantity">Quantidade</Label>
          <Input type="text" id="quantity" name="quantity" />
        </div>
        <Button>+</Button>
      </form>
      <section className="mt-10 space-y-3 ">
        {items.map((item, index) => (
          <PendingItem
            key={index}
            item={item}
            addItem={addItem}
            removeItem={removeItem}
          />
        ))}
      </section>
    </>
  );
}
