import { categoriesData } from "@/data/courses";
import MenuItem from "./MenuItem";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();
  const { categorySlug } = router.query;

  return (
    <nav className="flex flex-col gap-1">
      {/* Link para Home */}
      <MenuItem label="Início" href="/" isActive={router.pathname === "/"} />

      {/* Categorias (Capítulos) */}
      {/* <div className="text-xs text-zinc-500 uppercase font-semibold my-2 px-4">
        Áreas
      </div> */}
      <div className="text-xs text-zinc-500 uppercase font-semibold my-2 px-4">
        Formação DEV
      </div>
      {categoriesData.map((category) => (
        <MenuItem
          key={category.id}
          label={category.name}
          href={`/${category.slug}/trilhas`}
          isActive={categorySlug === category.slug}
        />
      ))}
    </nav>
  );
}
