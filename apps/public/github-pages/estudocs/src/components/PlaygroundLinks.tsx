type LinkItem = { label: string; href: string };

type Props = {
  title?: string;
  links?: LinkItem[];
  className?: string;
};

const defaultLinks: LinkItem[] = [
  { label: "PlayCode (JS)", href: "https://playcode.io/new" },
  { label: "JSFiddle (JS)", href: "https://jsfiddle.net/" },
  { label: "CodePen (JS)", href: "https://codepen.io/pen/" },
];

export default function PlaygroundLinks({
  title = "Playground online",
  links = defaultLinks,
  className = "",
}: Props) {
  return (
    <div
      className={[
        "my-4 rounded-xl border p-4",
        "border-(--sl-color-gray-5) bg-(--sl-color-gray-6)",
        className,
      ].join(" ")}
    >
      <div className="font-semibold text-(--sl-color-text)">{title}</div>

      <p className="mt-1 text-sm text-(--sl-color-text)/80">
        Abra um editor online para praticar os exercícios:
      </p>

      <ul className="mt-2 list-disc pl-5">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-90 text-(--sl-color-text)"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
