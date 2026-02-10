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

export default function EditPassword({ user }: EditProps) {
  // Receber os dados do formulário
  const { data, setData, put, processing, errors } = useForm({
    id: user.id || '',
    password: '',
    password_confirmation: '',
  });

  // Enviar os dados para a rota cadastrar através do método PUT
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Enviar os dados para a rota de edição de usuário
    put(route('users.updatePassword', { user: data.id }));
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Editar Senha" />

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
            Salvar
          </Button>
        </div>
      </form>
    </AppLayout>
  );
}
