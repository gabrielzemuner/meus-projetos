import { useRouter } from "next/router";
import { findCategoryBySlug, findTrailBySlug } from "@/utils/data-helpers";
import Link from "next/link";
import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumb";

export default function CoursesPage() {
  const router = useRouter();
  const { categorySlug, trailSlug } = router.query;

  const category = findCategoryBySlug(categorySlug as string);
  const trail = findTrailBySlug(categorySlug as string, trailSlug as string);

  if (!category) {
    return <div>Categoria não encontrada</div>;
  }

  if (!trail) {
    return <div>Trilha não encontrada</div>;
  }

  const itemsBreadCrumb: BreadcrumbItem[] = [
    { label: category.name, href: `/${categorySlug}/trilhas/` },
  ];

  return (
    <div>
      <Breadcrumb items={itemsBreadCrumb} />

      {/* Título */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{trail.title}</h1>
        <p className="text-zinc-400">{trail.description}</p>
      </div>

      {/* Lista de Cursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trail.courses.map((course, index) => (
          <Link
            key={course.id}
            href={`/${categorySlug}/trilhas/${trailSlug}/${course.slug}`}
            className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors"
          >
            {/* Thumbnail do curso */}
            <div className="relative h-40 bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
                Curso {index + 1}
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <div className="flex gap-4 text-xs text-zinc-500">
                <span>🎥 {course.totalLessons || 0} aulas</span>
                {course.totalDuration && <span>⏱️ {course.totalDuration}</span>}
              </div>

              {/* Barra de progresso */}
              {course.progress !== undefined && course.progress > 0 && (
                <div className="mt-4">
                  <div className="w-full bg-zinc-800 rounded-full h-1.5">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-zinc-500 mt-1 block">
                    {course.progress}% concluído
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
