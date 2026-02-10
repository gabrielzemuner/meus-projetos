import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Course } from '@/types/course';
import { Lesson } from '@/types/lesson';
import { Pagination } from '@/types/pagination';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Aulas',
    href: '',
  },
];

type IndexProps = {
  lessons: Pagination<Lesson>;
  course: Course;
};

export default function Index({ lessons, course }: IndexProps) {
  // console.log(lessons);
  // lessons = { data: lessons };

  // courses.data = [] // teste pra cair no else com dados vazios

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Aulas" />

      <MainHeader>
        <Link href={route('courses.index')}>
          <Button variant="success">Cursos</Button>
        </Link>
        <Link href={route('lessons.create', { course: course.id })}>
          <Button variant="success">Cadastrar</Button>
        </Link>
      </MainHeader>

      <div>Listar as Aulas</div>
      {lessons.data.length > 0 ? (
        lessons.data.map((lesson) => (
          <div>
            <div>ID: {lesson.id}</div>
            <div>Nome: {lesson.name}</div>
            <div>Ordem: {lesson.order}</div>
            <div>Curso: {lesson.course.name}</div>
            <div>Cadastrado: {lesson.created_at}</div>
            <div>Editado: {lesson.updated_at}</div>
            <Link href={route('lessons.show', { lesson: lesson.id })}>
              <Button variant="info">Visualizar</Button>
            </Link>
            <Link href={route('lessons.edit', { lesson: lesson.id })}>
              <Button variant="warning">Editar</Button>
            </Link>
            <ConfirmDeleteDialog routeName="lessons.destroy" id={lesson.id} />
          </div>
        ))
      ) : (
        <p>Nenhum curso encontrado!</p>
      )}
    </AppLayout>
  );
}
