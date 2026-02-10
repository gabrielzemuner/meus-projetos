import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import CustomPagination from '@/components/custom-pagination';
import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Pagination } from '@/types/pagination';
import { User } from '@/types/user';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Usuários',
    href: '',
  },
];

type IndexProps = {
  users: Pagination<User>;
}

export default function Index({ users }: IndexProps) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Usuários" />

      <MainHeader>
        <Link href={route('users.create')}>
          <Button variant="success">Cadastrar</Button>
        </Link>
      </MainHeader>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>E-mail</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="flex justify-center gap-2">
                <Link href={route('users.show', { id: user.id })}>
                  <Button variant="info">Visualizar</Button>
                </Link>
                <Link href={route('users.edit', { id: user.id })}>
                  <Button variant="warning">Editar</Button>
                </Link>
                <ConfirmDeleteDialog routeName="users.destroy" id={user.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CustomPagination pagination={users.meta} />
      {/* <Pagination links={users.meta.links} /> */}
    </AppLayout>
  );
}
