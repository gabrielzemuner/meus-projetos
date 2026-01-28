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

type CreateProps = {
  course: Course;
};

export default function Create({ course }: CreateProps) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Cadastrar Aula" />

      <MainHeader>
        <Link href={route('courses.index')}>
          <Button variant="success">Cursos</Button>
        </Link>
      </MainHeader>

      <div>Cadastrar Aula</div>
      <Form action={route('lessons.store')} method="post">
        <input type="hidden" name="course_id" value={course.id} />
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id="name" placeholder="Nome da aula" />
        </div>
        <div>
          <label htmlFor="description">Descrição:</label>
          <textarea name="description" id="description" rows={4} cols={30} />
        </div>
        <button>Cadastrar</button>
      </Form>
    </AppLayout>
  );
}
