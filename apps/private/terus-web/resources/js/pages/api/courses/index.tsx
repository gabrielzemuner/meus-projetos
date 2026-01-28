import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import CustomPagination from '@/components/custom-pagination';
import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Course } from '@/types/course';
import { Pagination } from '@/types/pagination';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Cursos',
    href: '',
  },
];

export default function Index() {
  const [courses, setCourses] = useState<Pagination<Course> | null>(null);
  const loading = courses === null;

  useEffect(() => {
    fetch('/api/courses')
      .then((r) => r.json())
      .then((json) => setCourses(json));
  }, []);

  console.log(courses?.data);

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

      <div>Listar os Cursos API</div>
      {loading ? (
        <div className="text-muted-foreground">Carregando...</div>
      ) : courses.data.length > 0 ? (
        courses.data.map((course) => (
          <div key={course.id}>
            <div>ID: {course.id}</div>
            <div>Nome: {course.name}</div>
            <div>Preço: {course.price}</div>
            <div>Cadastrado: {course.created_at}</div>
            <div>Editado: {course.updated_at}</div>
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

      {!loading && <CustomPagination pagination={courses.meta} />}
    </AppLayout>
  );
}
