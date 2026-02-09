import { useRouter } from "next/router";
import { findCategoryBySlug } from "@/utils/data-helpers";
import Link from "next/link";
import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumb";
import Image from "next/image";

export default function TrailsPage() {
  const router = useRouter();
  const { categorySlug } = router.query;

  const category = findCategoryBySlug(categorySlug as string);
  console.log(category)

  if (!category) {
    return <div>Categoria não encontrada</div>;
  }

  const itemsBreadCrumb: BreadcrumbItem[] = [
    { label: category.name, href: `/${categorySlug}/trilhas/` },
  ];

  return (
    <div>
      <Breadcrumb items={itemsBreadCrumb} />

      {/* Título */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
        <p className="text-zinc-400">{category.description}</p>
      </div>

      {/* Lista de Trilhas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.trails.map((trail) => (
          <Link
            key={trail.id}
            href={`/${categorySlug}/trilhas/${trail.slug}`}
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors"
          >
            {/* <div className="text-4xl mb-4">{trail.icon}</div> */}
            <h3 className="text-2xl font-black mb-2">
              <span className="font-thin">Trilha:</span> {trail.title}
            </h3>
            <p className="text-zinc-400 text-sm mb-2">{trail.description}</p>
            <div className="flex gap-3 mb-4">
              {trail.icons?.map((icon) => (
                <Image
                  key={icon}
                  src={icon}
                  alt="Imagem do curso"
                  width="50"
                  height="50"
                  className="rounded-md"
                />
              ))}
            </div>
            <div className="flex gap-4 text-xs text-zinc-500">
              <span>📚 {trail.courses?.length || 0} cursos</span>
              {trail.totalDuration && <span>⏱️ {trail.totalDuration}</span>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
