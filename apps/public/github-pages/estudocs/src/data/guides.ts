export type GuideVisibility = "public" | "private";

export type Guide = {
  id: string;
  title: string;
  badge: string;
  description: string;
  // para onde o card deve levar (já direto no primeiro conteúdo)
  startPath: string;
  visibility: GuideVisibility;
};

export const GUIDES: Guide[] = [
  {
    id: "js-antes-do-react",
    title: "JS antes do React",
    badge: "JavaScript",
    description:
      "Fundamentos e padrões de JavaScript antes de entrar no React.",
    startPath: "/js-antes-do-react/",
    visibility: "public",
  },
  {
    id: "typescript",
    title: "TypeScript",
    badge: "TS",
    description: "Tipos, generics e exemplos práticos com foco em uso real.",
    startPath: "/typescript/01-tipos/",
    visibility: "private",
  },
  {
    id: "essencial-css",
    title: "Essencial CSS",
    badge: "CSS",
    description: "Fundamentos essenciais para o desenvolvimento de aplicações.",
    startPath: "/essencial-css/",
    visibility: "public",
  },
];
