import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { User } from '@/types/user';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Usuários',
    href: '/usuarios',
  },
  {
    title: 'Visualizar',
    href: '',
  },
];

type ShowProps = {
  user: User;
}

export default function Show({ user }: ShowProps) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Usuários" />

      <MainHeader>
        <Link href={route('users.index')}>
          <Button variant="secondary">Listar</Button>
        </Link>
        <Link href={route('users.edit', { id: user.id })}>
          <Button variant="warning">Editar</Button>
        </Link>
        <Link href={route('users.editPassword', { id: user.id })}>
          <Button variant="warning">Editar Senha</Button>
        </Link>
        {/* <Link>
          <Button variant="warning">Editar</Button>
        </Link>
        <ConfirmDeleteDialog id={user.id} routeName="" /> */}
      </MainHeader>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-x-16 gap-y-2 lg:grid-cols-2">
          <div>
            <Label>ID</Label>
            <p className="px-3 py-1 text-muted-foreground">{user.id}</p>
          </div>
          <div>
            <Label>Nome</Label>
            <p className="px-3 py-1 text-muted-foreground">{user.name}</p>
          </div>
          <div>
            <Label>E-mail</Label>
            <p className="px-3 py-1 text-muted-foreground">{user.email}</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
