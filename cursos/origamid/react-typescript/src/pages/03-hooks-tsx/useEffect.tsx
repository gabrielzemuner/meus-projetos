import { useEffect } from "react";
import Title from "../../components/Title";

export default function UseEffect() {
  function useEffectCallback() {
    console.log("montou");
    return () => {
      console.log("desmontou");
    };
  }
  useEffect(useEffectCallback, []);
  return (
    <div>
      <Title title="useEffect" />
      <div>Effect</div>
    </div>
  );
}
