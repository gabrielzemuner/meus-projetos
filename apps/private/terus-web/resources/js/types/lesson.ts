import { Course } from './course';

export type Lesson = {
  id: number;
  name: string;
  description: string;
  order: number;
  created_at: string;
  updated_at: string;
  course: Course;
  course_id: number;
};
