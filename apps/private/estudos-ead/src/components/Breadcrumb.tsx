import { ChevronRightIcon, RouteIcon } from "lucide-react";
import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbProps = {
  title?: string;
  items: BreadcrumbItem[];
};

export default function Breadcrumb({
  title = "Trilhas",
  items,
}: BreadcrumbProps) {
  return (
    <nav className="text-sm mb-6 flex gap-4 items-center">
      <RouteIcon className="h-12 w-12" />
      <div className="flex flex-col items-start">
        <span className="text-3xl font-black">{title}</span>
        {/* {items.length !== 0 ? () : ()} */}
        <div className="flex items-center">
          {items.map((item, index) => (
            <span
              key={`${item.href}-${index}`}
              className="flex items-center"
            >
              {index > 0 && (
                <span className="text-zinc-400 mt-1">
                  <ChevronRightIcon className="w-5 h-5" />
                </span>
              )}

              <Link
                key={index}
                href={item.href}
                className="bg-linear-to-r from-blue-600 to-blue-900 text-white text-xs font-bold rounded-md px-2 py-0.5 mt-1 cursor-pointer"
              >
                {item.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
