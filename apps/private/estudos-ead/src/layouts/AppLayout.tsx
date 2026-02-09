import Menu from "@/layouts/Menu";
import { PropsWithChildren, useState } from "react";
import { MenuIcon } from "lucide-react";

export default function AppLayout({ children }: PropsWithChildren) {
  const [sidebar, setSidebar] = useState(true);
  // const [sidebarStorage, setSidebarStorage] = useLocalStorage("sidebar", "1");
  // const sidebar = sidebarStorage === "1";

  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-16 border-b border-zinc-800">Header</header>
      <div className="flex-1 flex relative">
        <aside
          className={`absolute top-0 left-0 h-full p-4 w-64 border-r border-zinc-800 transition-all duration-300 overflow-hidden ${
            sidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Menu />
        </aside>
        <main
          className={`bg-linear-to-br from-black to-zinc-800 gap-20 flex-1 p-4 transition-all duration-300 ${
            sidebar ? "ml-64" : "ml-0"
          }`}
        >
          <div
            className="p-1 cursor-pointer hover:bg-zinc-800 rounded-md inline-flex items-center justify-center"
            onClick={() => setSidebar(!sidebar)}
            // onClick={() => setSidebarStorage(sidebar ? "0" : "1")}
          >
            <MenuIcon />
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-4">{children}</div>
        </main>
      </div>
    </div>
  );
}
