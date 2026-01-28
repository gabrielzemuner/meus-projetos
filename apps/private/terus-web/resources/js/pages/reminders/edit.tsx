import { Combobox } from '@/components/combobox';
import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { Reminder } from '@/types/reminder';
import { Form, Head, Link } from '@inertiajs/react';
import { recurrenceOptions } from '.';
import { Option } from './create';

type EditProps = {
  reminder: Reminder;
  customers: Option[];
  services: Option[];
};

export default function Edit({ reminder, customers, services }: EditProps) {
  return (
    <AppLayout>
      <Head title="Editar Lembrete" />

      <MainHeader title="Editar" subtitle="Lembrete">
        <Link href={route('reminders.index')}>
          <Button variant="secondary">Listar</Button>
        </Link>
        <Link href={route('reminders.show', { id: reminder.id })}>
          <Button variant="info">Visualizar</Button>
        </Link>
        <ConfirmDeleteDialog routeName="reminders.destroy" id={reminder.id} />
      </MainHeader>

      <Form action={route('reminders.update', { id: reminder.id })} method="put">
        {({ errors, processing }) => (
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-1 gap-x-16 gap-y-2 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="customer_id">Nome do Cliente (Combobox)</Label>
                <Combobox
                  name="customer_id"
                  options={customers.map((c) => ({ value: String(c.id), label: c.name }))}
                  defaultValue={String(reminder.customer.id)}
                />
                {errors.customer_id && <span className="text-red-600">{errors.customer_id}</span>}
              </div>
              <div>
                <Label htmlFor="service_id">Serviço (Select)</Label>
                <Select name="service_id" defaultValue={String(reminder.service.id)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service, index) => (
                      <SelectItem key={index} value={String(service.id)}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service_id && <span className="text-red-600">{errors.service_id}</span>}
              </div>
              <div>
                <Label htmlFor="start_date">Data de Início</Label>
                <Input
                  id="start_date"
                  name="start_date"
                  type="date"
                  placeholder="Telefone do cliente"
                  className="custom-date mt-1"
                  defaultValue={reminder.start_date}
                />
                {errors.start_date && <span className="text-red-600">{errors.start_date}</span>}
              </div>
              <div>
                <Label htmlFor="recurrence">Recorrência (Select)</Label>
                <Select name="recurrence" defaultValue={String(reminder.recurrence)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a recorrência" />
                  </SelectTrigger>
                  <SelectContent>
                    {recurrenceOptions.map((recurrence, index) => (
                      <SelectItem key={index} value={recurrence.value}>
                        {recurrence.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.recurrence && <span className="text-red-600">{errors.recurrence}</span>}
              </div>
              <div>
                <Label htmlFor="message">Mensagem para Envio</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="sugestões de mensagem com chatgpt/copilot -> buscar algo gratuito para testes"
                  className="mt-1"
                  defaultValue={reminder.message}
                />
                {errors.message && <span className="text-red-600">{errors.message}</span>}
              </div>
            </div>

            <div>
              <Button type="submit" variant="success" disabled={processing} className="mt-1">
                {processing ? 'Salvando...' : 'Salvar'}
              </Button>
            </div>
          </div>
        )}
      </Form>
    </AppLayout>
  );
}
