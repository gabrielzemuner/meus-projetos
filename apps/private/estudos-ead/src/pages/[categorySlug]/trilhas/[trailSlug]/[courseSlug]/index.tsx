import { useRouter } from "next/router";
import {
  findCategoryBySlug,
  findCourseBySlug,
  findTrailBySlug,
} from "@/utils/data-helpers";
import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumb";

export default function CoursePage() {
  const router = useRouter();
  const { categorySlug, trailSlug, courseSlug } = router.query;

  const category = findCategoryBySlug(categorySlug as string);
  const trail = findTrailBySlug(categorySlug as string, trailSlug as string);

  // Busca o curso usando os slugs da URL
  const course = findCourseBySlug(
    categorySlug as string,
    trailSlug as string,
    courseSlug as string,
  );

  if (!category) return <div>Categoria não encontrada</div>;
  if (!trail) return <div>Trilha não encontrada</div>;

  // Se não encontrar, mostra erro
  if (!course) return <div>Curso não encontrado</div>;
  console.log(course);

  const itemsBreadCrumb: BreadcrumbItem[] = [
    { label: category.name, href: `/${categorySlug}/trilhas/` },
    {
      label: `Trilha ${trail.title}`,
      href: `/${categorySlug}/trilhas/${trailSlug}`,
    },
  ];

  // Renderiza o curso
  return (
    <div>
      <Breadcrumb title={course.title} items={itemsBreadCrumb} />

      <div className="flex justify-center items-center bg-zinc-900 h-8 z-10 mb-2 px-2 rounded-lg">
        <div className="ml-2 text-sm">
          <span>Aula: </span>
          <span className="font-bold">Nome da aula clicada</span>
        </div>
      </div>
      {/* Player, lista de aulas, etc */}
      <div className="flex bg-zinc-950/50 py-1 rounded-lg pl-1">
        <video
          controls
          src="/videos/formacao-dev-teste.mp4"
          className="w-full rounded-md overflow-hidden"
        ></video>
        <div className="w-102.5 relative ml-2 bg-linear-to-r from-zinc-900 via-zinc-900 to-black rounded-md overflow-hidden">
          <div className="absolute flex h-full w-full">
            <div className="flex flex-col w-full overflow-hidden rounded-lg">
              <div className="overflow-y-scroll overflow-x-hidden">
                {course.chapters.map((chapter) => (
                  <>
                    <div
                      key={chapter.id}
                      className="flex gap-4 py-3 px-4 bg-zinc-950 cursor-pointer"
                    >
                      <div className="bg-zinc-800 border-2 border-zinc-700/50 h-10 w-10 flex items-center justify-center rounded-full font-bold">
                        {chapter.order}
                      </div>
                      <div>
                        <div className="font-bold">{chapter.title}</div>
                        <div className="text-sm">1 de 2</div>
                      </div>
                    </div>
                    <span>
                      <div className="flex flex-col gap-3 py-3 px-4 bg-zinc-900/80">
                        {chapter.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="w-full cursor-pointer ml-3.5 pr-5"
                          >
                            <div className="text-sm overflow-hidden ml-1">
                              {lesson.order}. {lesson.title}
                            </div>
                          </div>
                        ))}
                      </div>
                    </span>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
