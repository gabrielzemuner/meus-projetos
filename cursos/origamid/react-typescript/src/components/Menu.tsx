import { routes } from "../routes.tsx";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <nav className="flex flex-col gap-1 whitespace-nowrap">
      {routes
        .filter((route) => !route.private)
        .map((route) => (
          <MenuItem key={route.path} label={route.label} to={route.path} />
        ))}
    </nav>
  );
}
