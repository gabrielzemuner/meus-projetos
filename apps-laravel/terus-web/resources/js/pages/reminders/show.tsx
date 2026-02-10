import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { formatDateTimeBR } from '@/lib/utils';
import { Reminder } from '@/types/reminder';
import { Head, Link } from '@inertiajs/react';
import { recurrenceLabel } from '.';

type ShowProps = {
  reminder: Reminder;
};

export default function Show({ reminder }: ShowProps) {
  return (
    <AppLayout>
      <Head title="Lembretes" />

      <MainHeader title="Visualizar" subtitle="Lembrete">
        <Link href={route('reminders.index')}>
          <Button variant="secondary">Listar</Button>
        </Link>
        <Link href={route('reminders.edit', { id: reminder.id })}>
          <Button variant="warning">Editar</Button>
        </Link>
        <ConfirmDeleteDialog routeName="reminders.destroy" id={reminder.id} />
      </MainHeader>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-x-16 gap-y-2 lg:grid-cols-2">
          <div>
            <Label>ID</Label>
            <p className="px-3 py-1 text-muted-foreground">{reminder.id}</p>
          </div>
          <div>
            <Label>Nome do Cliente</Label>
            <p className="px-3 py-1 text-muted-foreground">{reminder.customer.name}</p>
          </div>
          <div>
            <Label>Nome do Serviço</Label>
            <p className="px-3 py-1 text-muted-foreground">{reminder.service.name}</p>
          </div>
          <div>
            <Label>Data de Início</Label>
            <p className="px-3 py-1 text-muted-foreground">{formatDateTimeBR(reminder.start_date)}</p>
          </div>
          <div>
            <Label>Recorrência</Label>
            <p className="px-3 py-1 text-muted-foreground">{recurrenceLabel[reminder.recurrence]}</p>
          </div>
          <div>
            <Label>Data Próximo Envio</Label>
            <p className="px-3 py-1 text-muted-foreground">{formatDateTimeBR(reminder.next_run_at)}</p>
          </div>
          <div>
            <Label>Mensagem Para Envio</Label>
            <p className="px-3 py-1 text-muted-foreground">{reminder.message}</p>
          </div>
          <div>
            <Label>Ativo</Label>
            <p className="px-3 py-1 text-muted-foreground">{reminder.is_active ? 'Ativo' : 'Inativo'}</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
