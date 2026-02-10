import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import CustomPagination from '@/components/custom-pagination';
import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Course } from '@/types/course';
import { Pagination } from '@/types/pagination';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Cursos',
    href: '',
  },
];

type IndexProps = {
  courses: Pagination<Course>;
};

export default function Index({ courses }: IndexProps) {
  // console.log(courses.data)
  // courses.data = [] // teste pra cair no else com dados vazios

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Cursos" />

      <MainHeader>
        {/* <Link href={route('courses.show')}>
          <Button variant="success">Visualizar</Button>
        </Link> */}
        <Link href={route('courses.create')}>
          <Button variant="success">Cadastrar</Button>
        </Link>
      </MainHeader>

      <div>Listar os Cursos</div>
      {courses.data.length > 0 ? (
        courses.data.map((course) => (
          <div>
            <div>ID: {course.id}</div>
            <div>Nome: {course.name}</div>
            <div>Preço: {course.price}</div>
            <div>Cadastrado: {course.created_at}</div>
            <div>Editado: {course.updated_at}</div>
            <Link href={route('lessons.index', { course: course.id })}>
              <Button variant="info">Aulas</Button>
            </Link>
            <Link href={route('courses.show', { course: course.id })}>
              <Button variant="success">Visualizar</Button>
            </Link>
            <Link href={route('courses.edit', { course: course.id })}>
              <Button variant="success">Editar</Button>
            </Link>
            <ConfirmDeleteDialog routeName="courses.destroy" id={course.id} />
          </div>
        ))
      ) : (
        <p>Nenhum curso encontrado!</p>
      )}

      <CustomPagination pagination={courses.meta} />
    </AppLayout>
  );
}
