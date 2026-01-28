import { Checkbox, mergeProps } from "@base-ui/react";
import { cva } from "class-variance-authority";
import { Check } from "lucide-react";

const checkboxVariants = cva(
  "inline-flex h-5 w-5 shrink-0 relative rounded-sm border-1 border-highlight bg-background shadow-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 data-[checked]:bg-linear-to-tl duration-350 ease-out transition-all data-[checked]:from-primary/5 data-[checked]:to-primary/25 data-[checked]:shadow-raised data-[checked]:border-primary/50 cursor-pointer data-[disabled]:opacity-50"
);

const checkboxIndicatorVariants = cva(
  "flex items-center justify-center absolute top-1/2 left-1/2 -translate-1/2"
);

interface CheckboxProps extends React.ComponentProps<typeof Checkbox.Root> {}

export default function NeuCheckbox(props: CheckboxProps) {
  const mergedProps = mergeProps(props, {
    className: checkboxVariants(),
  });

  const mergedIndicator = mergeProps(props, {
    className: checkboxIndicatorVariants(),
  });

  return (
    <Checkbox.Root {...mergedProps}>
      <Checkbox.Indicator {...mergedIndicator}>
        <Check className="w-3 h-3 text-primary" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}
