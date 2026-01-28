// a diferença para o html é que no html <textarea></textarea> enquanto no react é como se fosse um input, uma tag que já fecha <textarea />

import { useState } from "react";

export default function App() {
  const [textarea, setTextarea] = useState("");
  return (
    <form>
      <textarea
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
        rows="10"
      />
      {textarea}
    </form>
  );
}
