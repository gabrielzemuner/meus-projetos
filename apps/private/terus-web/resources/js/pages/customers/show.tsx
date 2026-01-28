import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { Customer } from '@/types/customer';
import { Head, Link } from '@inertiajs/react';

type ShowProps = {
  customer: Customer;
};

export default function Show({ customer }: ShowProps) {
  return (
    <AppLayout>
      <Head title="Clientes" />

      <MainHeader title="Visualizar" subtitle="Cliente">
        <Link href={route('customers.index')}>
          <Button variant="secondary">Listar</Button>
        </Link>
        <Link href={route('customers.edit', { id: customer.id })}>
          <Button variant="warning">Editar</Button>
        </Link>
        <ConfirmDeleteDialog routeName="customers.destroy" id={customer.id} />
      </MainHeader>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-x-16 gap-y-2 lg:grid-cols-2">
          <div>
            <Label>ID</Label>
            <p className="px-3 py-1 text-muted-foreground">{customer.id}</p>
          </div>
          <div>
            <Label>Nome</Label>
            <p className="px-3 py-1 text-muted-foreground">{customer.name}</p>
          </div>
          <div>
            <Label>Telefone</Label>
            <p className="px-3 py-1 text-muted-foreground">{customer.phone}</p>
          </div>
          <div>
            <Label>Observações</Label>
            <p className="px-3 py-1 text-muted-foreground">{customer.notes}</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
