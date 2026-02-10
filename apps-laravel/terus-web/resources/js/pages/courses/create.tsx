import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Form, Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Cursos',
    href: '',
  },
];

export default function Create() {
  const { errors } = usePage().props;

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Cursos" />

      <div>Create</div>
      <Form action={route('courses.store')} method="post">
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id="name" placeholder="Nome do curso" />
          {errors.name && <span className="text-red-600">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="price">Preço:</label>
          <input type="text" name="price" id="price" placeholder="Valor do curso" />
          {errors.price && <span className="text-red-600">{errors.price}</span>}
        </div>
        <button>Cadastrar</button>
      </Form>
    </AppLayout>
  );
}
