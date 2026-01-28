import type { ComponentPropsWithoutRef } from "react";

// React.ReactNode
// PropsWithChildren

// type LabelProps = {
//   children: PropsWithChildren;
//   props: LabelHTMLAttributes<HTMLLabelElement>;
// };

// type LabelProps = PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>;

type LabelProps = ComponentPropsWithoutRef<"label">;

export default function Label({ children, ...props }: LabelProps) {
  return (
    <label className="block text-xs text-slate-400" {...props}>
      {children}
    </label>
  );
}
