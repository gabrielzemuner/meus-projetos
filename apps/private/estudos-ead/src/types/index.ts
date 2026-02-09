// types/index.ts

// ============================================
// AULA (menor unidade)
// ============================================
export interface Lesson {
  id: string;
  title: string;
  slug: string;
  duration: string; // "10m", "15m", "1h 20m"
  videoUrl?: string; // URL do YouTube ou local
  isCompleted: boolean;
  order: number; // Ordem dentro do capítulo
}

// ============================================
// CAPÍTULO (agrupa aulas)
// ============================================
export interface Chapter {
  id: string;
  title: string;
  order: number;
  lessons: Lesson[];
  // Campos calculados
  totalLessons?: number;
  totalDuration?: string;
  completedLessons?: number;
}

// ============================================
// CURSO (tem capítulos e aulas)
// ============================================
export interface Course {
  id: string;
  title: string;
  slug: string;
  thumbnail: string; // URL da imagem
  chapters: Chapter[];

  // Metadata
  icons?: string[]; // Emoji ou ícone (React logo, TS logo, etc)
  difficulty?: "Iniciante" | "Intermediário" | "Avançado";

  // Campos calculados
  totalLessons?: number; // Total de aulas
  totalDuration?: string; // "17h 40m"
  completedLessons?: number;
  progress?: number; // 0-100
}

// ============================================
// TRILHA (tem cursos)
// ============================================
export interface Trail {
  id: string;
  title: string;
  slug: string;
  description: string;
  icons?: string[]; // Ícone da trilha (JS + React logo)
  courses: Course[];

  // Campos calculados
  totalCourses?: number;
  totalLessons?: number;
  totalDuration?: string;
  completedCourses?: number;
  progress?: number; // 0-100
}

// ============================================
// CATEGORIA (tem trilhas)
// ============================================
export interface Category {
  id: string;
  name: string;
  slug: string; // "especialista-dev"
  description: string;
  badge?: string; // "Especialista"
  trails: Trail[];
}

// ============================================
// ESTATÍSTICAS GERAIS (Dashboard)
// ============================================
export interface DashboardStats {
  completedCourses: number;
  completedLessons: number;
  totalTimeWatched: string; // "24h 20m"
  completionPercentage: number; // 9%
}

// ============================================
// PROGRESSO DO USUÁRIO (localStorage)
// ============================================
export interface UserProgress {
  [courseId: string]: {
    completedLessons: string[]; // IDs das aulas concluídas
    currentLesson?: string; // ID da aula atual
    lastWatched?: Date;
  };
}
