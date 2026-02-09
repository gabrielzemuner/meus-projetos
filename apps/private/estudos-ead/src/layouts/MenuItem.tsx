import Link from "next/link";

type MenuItemProps = {
  label: string;
  href: string;
  isActive?: boolean;
};

export default function MenuItem({ label, href, isActive }: MenuItemProps) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-md transition-colors ${
        isActive
          ? "bg-white/5 text-white font-medium"
          : "text-zinc-300 hover:text-white hover:bg-white/5"
      }`}
    >
      {label}
    </Link>
  );
}
