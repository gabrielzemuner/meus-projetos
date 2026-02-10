import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Course } from '@/types/course';
import { Form, Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Cursos',
    href: '',
  },
];

export default function Edit({ course }: { course: Course }) {
  console.log(course)
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Cursos" />

      <MainHeader>
        <Link href={route('courses.show', { course: course.id })}>
          <Button variant="success">Visualizar</Button>
        </Link>
        <ConfirmDeleteDialog routeName="courses.destroy" id={course.id} />
      </MainHeader>

      <div>Editar Curso</div>
      <Form action={route('courses.update', { course: course.id })} method="put" resetOnError>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id="name" placeholder="Nome do curso" defaultValue={course.name} />
        </div>
        <div>
          <label htmlFor="price">Preço:</label>
          <input type="text" name="price" id="price" placeholder="Valor do curso" defaultValue={course.price} />
        </div>
        <button>Salvar</button>
      </Form>
    </AppLayout>
  );
}
