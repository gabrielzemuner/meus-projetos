import { ComponentPropsWithRef, forwardRef } from "react";
import { cn } from "../lib/utils";

// type ButtonProps = {
//   children?: React.ReactNode;
//   onClick: React.MouseEventHandler<HTMLButtonElement>;
// };

// type ButtonProps2 = React.PropsWithChildren<{ // mesma ideia do exemplo 1 acima... [e um "açúcar"]
//   onClick: React.MouseEventHandler<HTMLButtonElement>;
// }>;

// type ButtonProps3 = React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren;
// ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren

// type ButtonProps4 = React.ComponentPropsWithoutRef<"button">;

// export default function Button({
//   children,
//   ...props
// }: ComponentPropsWithRef<"button">) {
//   return (
//     <button
//       className="px-4 py-2 mt-10 font-bold text-white bg-transparent bg-gray-800 border-2 border-white rounded bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }

type ButtonProps5 = ComponentPropsWithRef<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps5>(function Button(
  { children, className, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn("px-4 py-2 mt-10 font-bold text-white bg-transparent bg-gray-800 border-2 border-white rounded bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50", className)}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
