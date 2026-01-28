import React, { useEffect, useState } from "react";

type Props = {
  buttonLabel?: string;
  title: string;
  children: React.ReactNode;
};

export default function ExampleModal({
  buttonLabel = "Ver exemplo em React",
  title,
  children,
}: Props) {
  const [open, setOpen] = useState(false);

  // Fecha com ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="
          inline-flex items-center gap-2
          rounded-xl border border-(--sl-color-gray-5)
          bg-(--sl-color-gray-6) px-4 py-2
          text-(--sl-color-text)
          hover:opacity-90 active:opacity-80
        "
      >
        {buttonLabel} <span aria-hidden="true">→</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
          className="
            fixed inset-0 z-999999
            grid place-items-center
            bg-black/70 p-4
            backdrop-blur-sm
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              w-full max-w-3xl
              max-h-[85vh] overflow-auto
              rounded-2xl border border-(--sl-color-gray-5)
              bg-(--sl-color-bg) text-(--sl-color-text)
              shadow-2xl
              p-5
            "
          >
            <div className="flex items-center gap-3">
              <h3 className="m-0 flex-1 text-lg font-semibold">{title}</h3>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="
                  rounded-xl border border-(--sl-color-gray-5)
                  bg-transparent px-3 py-1.5
                  text-(--sl-color-text)
                  hover:bg-white/5 active:bg-white/10
                "
              >
                Fechar
              </button>
            </div>

            <div className="mt-4">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
