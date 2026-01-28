import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "../lib/utils";

type InputProps = ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(
        "block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700",
        className
      )}
      {...props}
    />
  );
});

export default Input;
