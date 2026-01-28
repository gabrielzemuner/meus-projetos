import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import CustomPagination from '@/components/custom-pagination';
import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { Customer } from '@/types/customer';
import { Pagination } from '@/types/pagination';
import { Head, Link } from '@inertiajs/react';

type IndexProps = {
  customers: Pagination<Customer>;
};

export default function Index({ customers }: IndexProps) {
  return (
    <AppLayout>
      <Head title="Clientes" />

      <MainHeader title="Listar" subtitle="Clientes">
        <Link href={route('customers.create')}>
          <Button variant="success">Cadastrar</Button>
        </Link>
      </MainHeader>

      <Table>
        <TableHeader>
          <TableRow className="bg-gray-200 font-extrabold uppercase dark:bg-primary-foreground">
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Observações</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.data.length > 0 ? (
            customers.data.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.notes}</TableCell>
                <TableCell className="flex justify-center gap-2">
                  <Link href={route('customers.show', { id: customer.id })}>
                    <Button variant="info">Visualizar</Button>
                  </Link>
                  <Link href={route('customers.edit', { id: customer.id })}>
                    <Button variant="warning">Editar</Button>
                  </Link>
                  <ConfirmDeleteDialog routeName="customers.destroy" id={customer.id} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="text-red-500">Nenhum registro encontrado</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {customers.data.length > 0 && <CustomPagination pagination={customers.meta} />}
    </AppLayout>
  );
}
