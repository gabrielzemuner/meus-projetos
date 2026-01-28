import { useMemo, useState } from "react";

export default function ArrayMethodsReactDemo() {
  const [numbers] = useState([1, 2, 3, 4, 5]);

  const mapped = useMemo(() => numbers.map((n) => n * 2), [numbers]);
  const filtered = useMemo(() => numbers.filter((n) => n % 2 !== 0), [numbers]);
  const sum = useMemo(() => numbers.reduce((acc, n) => acc + n, 0), [numbers]);

  return (
    <div className="grid gap-3">
      <p className="m-0 text-(--sl-color-gray-2)">
        Exemplo “mundo real”: calculando arrays e renderizando no JSX.
      </p>

      <div className="grid gap-2 rounded-2xl border border-(--sl-color-gray-5) bg-white/5 p-4">
        <div className="text-sm">
          <span className="font-semibold">Original:</span>{" "}
          <span className="text-(--sl-color-gray-2)">
            {JSON.stringify(numbers)}
          </span>
        </div>

        <div className="text-sm">
          <span className="font-semibold">map (*2):</span>{" "}
          <span className="text-(--sl-color-gray-2)">
            {JSON.stringify(mapped)}
          </span>
        </div>

        <div className="text-sm">
          <span className="font-semibold">filter (ímpares):</span>{" "}
          <span className="text-(--sl-color-gray-2)">
            {JSON.stringify(filtered)}
          </span>
        </div>

        <div className="text-sm">
          <span className="font-semibold">reduce (soma):</span>{" "}
          <span className="text-(--sl-color-gray-2)">{sum}</span>
        </div>
      </div>

      <div className="grid gap-2">
        <span className="font-semibold">Render com JSX:</span>

        <ul className="m-0 list-disc pl-5 text-(--sl-color-gray-2)">
          {filtered.map((n) => (
            <li key={n}>Número ímpar: {n}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
