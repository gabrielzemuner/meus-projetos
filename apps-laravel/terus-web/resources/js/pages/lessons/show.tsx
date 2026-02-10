import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Lesson } from '@/types/lesson';
import { Head, Link } from '@inertiajs/react';

type ShowProps = {
  lesson: Lesson;
};

export default function Show({ lesson }: ShowProps) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Cursos',
      href: route('courses.index'),
    },
    {
      title: 'Aulas',
      href: route('lessons.index', { course: lesson.course_id }),
    },
    {
      title: 'Aula',
      href: '',
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Visualizar Aula" />

      <MainHeader>
        <Link href={route('lessons.index', { course: lesson.course_id })}>
          <Button variant="success">Aulas</Button>
        </Link>
        <Link href={route('lessons.edit', { lesson: lesson.id })}>
          <Button variant="success">Editar</Button>
        </Link>
      </MainHeader>

      <div>Visualizar Aula</div>
      <div>ID: {lesson.id}</div>
      <div>Nome: {lesson.name}</div>
      <div>Descrição: {lesson.description}</div>
      <div>Ordem: {lesson.order}</div>
      <div>Curso: {lesson.course.name}</div>
      <div>Cadastrado: {lesson.created_at}</div>
      <div>Editado: {lesson.updated_at}</div>
    </AppLayout>
  );
}
