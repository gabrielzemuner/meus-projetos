import { useEffect } from "react";

type HeadProps = {
  title: string;
  description?: string;
};

export default function Head(props: HeadProps) {
  useEffect(() => {
    document.title = props.title + " | Dogs";
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", props.description || ""); // optional chaining
  }, [props]);

  return null;
}
