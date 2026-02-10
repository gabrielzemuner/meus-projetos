import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import CustomPagination from '@/components/custom-pagination';
import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { formatDateTimeBR } from '@/lib/utils';
import { Pagination } from '@/types/pagination';
import { Reminder } from '@/types/reminder';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';

export const recurrenceOptions = [
  { value: 'day', label: 'Diária' },
  { value: 'week', label: 'Semanal' },
  { value: 'month', label: 'Mensal' },
  { value: 'year', label: 'Anual' },
];

export const recurrenceLabel = Object.fromEntries(recurrenceOptions.map((o) => [o.value, o.label]));

type IndexProps = {
  reminders: Pagination<Reminder>;
};

export default function Index({ reminders }: IndexProps) {
  const [togglingId, setTogglingId] = useState<number | null>(null);

  function toggle(reminderId: number) {
    setTogglingId(reminderId);

    router.patch(
      route('reminders.toggle', { id: reminderId }),
      {},
      {
        preserveScroll: true,
        onFinish: () => setTogglingId(null),
      },
    );
  }

  return (
    <AppLayout>
      <Head title="Clientes" />

      <MainHeader title="Listar" subtitle="Lembretes">
        <Link href={route('reminders.create')}>
          <Button variant="success">Cadastrar</Button>
        </Link>
      </MainHeader>

      <Table>
        <TableHeader>
          <TableRow className="bg-gray-200 font-extrabold uppercase dark:bg-primary-foreground">
            <TableHead>ID</TableHead>
            <TableHead>Nome do Cliente</TableHead>
            <TableHead>Serviço</TableHead>
            <TableHead>Data de Início</TableHead>
            <TableHead>Recorrência</TableHead>
            <TableHead>Data Próximo Envio</TableHead>
            <TableHead>Mensagem para Envio</TableHead>
            <TableHead>Ativo</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reminders.data.length > 0 ? (
            reminders.data.map((reminder) => (
              <TableRow key={reminder.id}>
                <TableCell>{reminder.id}</TableCell>
                <TableCell>{reminder.customer.name}</TableCell>
                <TableCell>{reminder.service.name}</TableCell>
                <TableCell>{formatDateTimeBR(reminder.start_date)}</TableCell>
                <TableCell>{recurrenceLabel[reminder.recurrence]}</TableCell>
                <TableCell>{formatDateTimeBR(reminder.next_run_at)}</TableCell>
                <TableCell>{reminder.message}</TableCell>
                <TableCell>
                  {/* {reminder.is_active ? (
                    <Button variant="success" size="xsm">
                      Ativo
                    </Button>
                  ) : (
                    <Button variant="destructive" size="xsm">
                      Inativo
                    </Button>
                  )} */}
                  <Button
                    variant={reminder.is_active ? 'success' : 'destructive'}
                    size="xsm"
                    disabled={togglingId === reminder.id}
                    onClick={() => toggle(reminder.id)}
                  >
                    {togglingId === reminder.id ? '...' : reminder.is_active ? 'Ativo' : 'Inativo'}
                  </Button>
                </TableCell>
                <TableCell className="flex justify-center gap-2">
                  <Link href={route('reminders.show', { id: reminder.id })}>
                    <Button variant="info">Visualizar</Button>
                  </Link>
                  <Link href={route('reminders.edit', { id: reminder.id })}>
                    <Button variant="warning">Editar</Button>
                  </Link>
                  <ConfirmDeleteDialog routeName="reminders.destroy" id={reminder.id} />
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

      {reminders.data.length > 0 && <CustomPagination pagination={reminders.meta} />}
    </AppLayout>
  );
}
