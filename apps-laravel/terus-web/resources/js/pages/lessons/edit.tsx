import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Lesson } from '@/types/lesson';
import { Form, Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Cursos',
    href: '',
  },
];

type EditProps = {
  lesson: Lesson;
};

export default function Edit({ lesson }: EditProps) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Cadastrar Aula" />

      <MainHeader>
        <Link href={route('lessons.index', { course: lesson.course_id })}>
          <Button variant="success">Aulas</Button>
        </Link>
        <Link href={route('lessons.show', { lesson: lesson.id })}>
          <Button variant="success">Visualizar</Button>
        </Link>
      </MainHeader>

      <div>Editar Aula</div>
      <Form action={route('lessons.update', { lesson: lesson.id })} method="put">
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id="name" placeholder="Nome da aula" defaultValue={lesson.name} />
        </div>
        <div>
          <label htmlFor="description">Descrição:</label>
          <textarea name="description" id="description" rows={4} cols={30} defaultValue={lesson.description} />
        </div>
        <button>Salvar</button>
      </Form>
    </AppLayout>
  );
}
