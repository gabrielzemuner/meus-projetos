import type { ComponentProps } from "react";
import styles from "./Button.module.css";

export default function Button({
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
