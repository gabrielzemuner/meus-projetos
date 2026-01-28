import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { User } from '@/types/user';
import { Head, Link, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Usuários',
    href: '/usuarios',
  },
  {
    title: 'Editar',
    href: '',
  },
];

type EditProps = {
  user: User;
}

export default function Edit({ user }: EditProps) {
  // Receber os dados do formulário
  const { data, setData, put, processing, errors } = useForm({
    id: user.id || '',
    name: user.name || '',
    email: user.email || '',
  });

  // Enviar os dados para a rota cadastrar através do método PUT
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Enviar os dados para a rota de edição de usuário
    put(route('users.update', { user: data.id }));
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Usuários" />

      <MainHeader>
        <Link href={route('users.index')}>
          <Button variant="secondary">Listar</Button>
        </Link>
        <Link href={route('users.show', { id: user.id })}>
          <Button variant="info">Visualizar</Button>
        </Link>
      </MainHeader>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-x-16 gap-y-2 lg:grid-cols-2">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="text"
              placeholder="Nome completo do usuário"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              className="mt-1"
            />
            {errors.name && <span className="text-red-600">{errors.name}</span>}
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="E-mail do usuário"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="mt-1"
            />
            {errors.email && <span className="text-red-600">{errors.email}</span>}
          </div>
        </div>
        <div>
          <Button type="submit" variant="success" disabled={processing} className="mt-1">
            Salvar
          </Button>
        </div>
      </form>
    </AppLayout>
  );
}
