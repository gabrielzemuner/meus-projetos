import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

// ================== Root ==================
const cardVariants = cva("rounded-2xl border-3 border-border", {
  variants: {
    variant: {
      raised: "shadow-raised",
      inset: "shadow-inset",
    },
  },
  defaultVariants: {
    variant: "raised",
  },
});

interface CardRootProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

function CardRoot(props: CardRootProps) {
  const mergedProps = mergeProps(props, {
    className: cardVariants({ variant: props.variant }),
  });

  return useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
}

// ================== Subcomponents ==================
const cardHeaderVariants = cva("flex flex-col space-y-1.5 p-6");
interface CardHeaderProps extends useRender.ComponentProps<"div"> {}
function CardHeader(props: CardHeaderProps) {
  const mergedProps = mergeProps(props, { className: cardHeaderVariants() });
  return useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
}

const cardTitleVariants = cva("font-semibold leading-none tracking-tight");
interface CardTitleProps extends useRender.ComponentProps<"div"> {}
function CardTitle(props: CardTitleProps) {
  const mergedProps = mergeProps(props, { className: cardTitleVariants() });
  return useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
}

const cardDescriptionVariants = cva("text-sm text-muted-foreground");
interface CardDescriptionProps extends useRender.ComponentProps<"div"> {}
function CardDescription(props: CardDescriptionProps) {
  const mergedProps = mergeProps(props, {
    className: cardDescriptionVariants(),
  });
  return useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
}

const cardContentVariants = cva("p-6 pt-0");
interface CardContentProps extends useRender.ComponentProps<"div"> {}
function CardContent(props: CardContentProps) {
  const mergedProps = mergeProps(props, { className: cardContentVariants() });
  return useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
}

const cardFooterVariants = cva("p-6 pt-0");
interface CardFooterProps extends useRender.ComponentProps<"div"> {}
function CardFooter(props: CardFooterProps) {
  const mergedProps = mergeProps(props, { className: cardFooterVariants() });
  return useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });
}

// ================== Compound export (tipado) ==================
type CardComponent = typeof CardRoot & {
  Header: typeof CardHeader;
  Title: typeof CardTitle;
  Description: typeof CardDescription;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
};

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
}) as CardComponent;
