import { NavLink } from "react-router";

type MenuItemProps = {
  label: string;
  to: string;
};

export default function MenuItem({ label, to }: MenuItemProps) {
  return (
    <NavLink
      to={to}
      className="px-4 py-2 text-zinc-300 text-sm hover:text-white hover:bg-white/5 rounded-md"
    >
      {label}
    </NavLink>
  );
}
