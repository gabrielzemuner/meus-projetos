import { mergeProps, Switch, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "inline-flex items-center cursor-pointer h-5.5 w-12 rounded-full focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-foreground focus-visible:ring-2 bg-background shadow-inset data-[checked]:bg-primary border-1 border-highlight data-[checked]:border-primary"
);

const thumbVariants = cva(
  "h-5 w-5 bg-background relative rounded-full block ease-out transition-all duration-350 border-1 border-highlight after:w-1 after:h-1 after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 after:bg-muted-foreground after:rounded-full shadow-inset translate-x-0 data-[checked]:translate-x-6.5 data-[checked]:after:bg-primary"
);

interface SwitchProps
  extends useRender.ComponentProps<"switch">,
    VariantProps<typeof switchVariants> {}

export default function NeuSwitch(props: SwitchProps) {
  const mergedProps = mergeProps(props, {
    className: switchVariants(),
  });

  const thumbProps = mergeProps(props, {
    className: thumbVariants(),
  });

  return (
    <Switch.Root {...mergedProps}>
      <Switch.Thumb {...thumbProps} />
    </Switch.Root>
  );
}
