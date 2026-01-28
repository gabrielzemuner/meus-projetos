import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      type="submit"
      className="self-end shrink h-10 px-4 font-extrabold text-white rounded-lg bg-fuchsia-300 cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
}
