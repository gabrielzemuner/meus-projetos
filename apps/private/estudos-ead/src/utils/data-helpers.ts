// utils/data-helpers.ts
import { categoriesData } from "@/data/courses";
import { Category, Trail, Course } from "@/types";

// Busca categoria pelo slug
export function findCategoryBySlug(slug: string): Category | undefined {
  return categoriesData.find((cat) => cat.slug === slug);
}

// Busca trilha pelo slug
export function findTrailBySlug(
  categorySlug: string,
  trailSlug: string,
): Trail | undefined {
  const category = findCategoryBySlug(categorySlug);
  return category?.trails.find((trail) => trail.slug === trailSlug);
}

// Busca curso pelo slug
export function findCourseBySlug(
  categorySlug: string,
  trailSlug: string,
  courseSlug: string,
): Course | undefined {
  const trail = findTrailBySlug(categorySlug, trailSlug);
  return trail?.courses.find((course) => course.slug === courseSlug);
}
