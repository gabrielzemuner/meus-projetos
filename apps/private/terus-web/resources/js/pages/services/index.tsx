import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import CustomPagination from '@/components/custom-pagination';
import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { Pagination } from '@/types/pagination';
import { Service } from '@/types/service';
import { Head, Link } from '@inertiajs/react';

type IndexProps = {
  services: Pagination<Service>;
};

export default function Index({ services }: IndexProps) {
  return (
    <AppLayout>
      <Head title="Serviços" />

      <MainHeader title="Listar" subtitle="Serviços">
        <Link href={route('services.create')}>
          <Button variant="success">Cadastrar</Button>
        </Link>
      </MainHeader>

      <Table>
        <TableHeader>
          <TableRow className="bg-gray-200 font-extrabold uppercase dark:bg-primary-foreground">
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.data.length > 0 ? (
            services.data.map((service) => (
              <TableRow key={service.id}>
                <TableCell>{service.id}</TableCell>
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.description}</TableCell>
                <TableCell className="flex justify-center gap-2">
                  <Link href={route('services.show', { id: service.id })}>
                    <Button variant="info">Visualizar</Button>
                  </Link>
                  <Link href={route('services.edit', { id: service.id })}>
                    <Button variant="warning">Editar</Button>
                  </Link>
                  <ConfirmDeleteDialog routeName="services.destroy" id={service.id} />
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

      {services.data.length > 0 && <CustomPagination pagination={services.meta} />}
    </AppLayout>
  );
}
