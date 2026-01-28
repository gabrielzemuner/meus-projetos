import type { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      className={cn(
        "block w-full border border-rose-400 rounded p-3 disabled:bg-zinc-100 disabled:border-zinc-200",
        className
      )}
      {...props}
    />
  );
}
export default Input;
