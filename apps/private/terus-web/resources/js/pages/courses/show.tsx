import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Course } from '@/types/course';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Cursos',
    href: '',
  },
];

export default function Show({ course }: { course: Course }) {
  console.log(course);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Cursos" />

      <MainHeader>
        <Link href={route('courses.index')}>
          <Button variant="success">Cursos</Button>
        </Link>
        <Link href={route('courses.edit', { course: course.id })}>
          <Button variant="success">Editar</Button>
        </Link>
        <Link href={route('lessons.index', { course: course.id })}>
          <Button variant="success">Aulas</Button>
        </Link>
        <ConfirmDeleteDialog routeName="courses.destroy" id={course.id} />
      </MainHeader>

      <div>Detalhes do Curso</div>
      <div>ID: {course.id}</div>
      <div>Nome: {course.name}</div>
      <div>Preço: {course.price}</div>
      <div>Cadastrado: {course.created_at}</div>
      <div>Editado: {course.updated_at}</div>
    </AppLayout>
  );
}
