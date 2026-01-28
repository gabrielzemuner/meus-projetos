import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Usuários',
    href: '/usuarios',
  },
  {
    title: 'Cadastrar',
    href: '',
  },
];

export default function Create() {
  // Receber os dados do formulário
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  // Enviar os dados para a rota cadastrar através do método POST
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Enviar os dados para a rota de criação de usuário
    post(route('users.store'));
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Usuários" />

      <MainHeader title="Cadastrar" subtitle="Usuários">
        <Link href={route('users.index')}>
          <Button variant="secondary">Listar</Button>
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
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="Senha do usuário"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className="mt-1"
            />
            {errors.password && <span className="text-red-600">{errors.password}</span>}
          </div>
          <div>
            <Label htmlFor="password_confirmation">Confirmar Senha</Label>
            <Input
              id="password_confirmation"
              type="password"
              placeholder="Confirmar a senha"
              value={data.password_confirmation}
              onChange={(e) => setData('password_confirmation', e.target.value)}
              className="mt-1"
            />
            {errors.password_confirmation && <span className="text-red-600">{errors.password_confirmation}</span>}
          </div>
        </div>
        <div>
          <Button type="submit" variant="success" disabled={processing} className="mt-1">
            Cadastrar
          </Button>
        </div>
      </form>
    </AppLayout>
  );
}
