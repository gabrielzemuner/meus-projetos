import { Course } from "@/types";

// utils/progress.ts
export function calculateCourseProgress(course: Course): number {
  const totalLessons = course.chapters.reduce(
    (acc, chapter) => acc + chapter.lessons.length,
    0,
  );
  const completedLessons = course.chapters.reduce(
    (acc, chapter) => acc + chapter.lessons.filter((l) => l.isCompleted).length,
    0,
  );

  return totalLessons > 0
    ? Math.round((completedLessons / totalLessons) * 100)
    : 0;
}
