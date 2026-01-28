import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { Service } from '@/types/service';
import { Head, Link } from '@inertiajs/react';

type ShowProps = {
  service: Service;
};

export default function Show({ service }: ShowProps) {
  return (
    <AppLayout>
      <Head title="Serviços" />

      <MainHeader title="Visualizar" subtitle="Serviço">
        <Link href={route('services.index')}>
          <Button variant="secondary">Listar</Button>
        </Link>
        <Link href={route('services.edit', { id: service.id })}>
          <Button variant="warning">Editar</Button>
        </Link>
        <ConfirmDeleteDialog routeName="services.destroy" id={service.id} />
      </MainHeader>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-x-16 gap-y-2 lg:grid-cols-2">
          <div>
            <Label>ID</Label>
            <p className="px-3 py-1 text-muted-foreground">{service.id}</p>
          </div>
          <div>
            <Label>Nome</Label>
            <p className="px-3 py-1 text-muted-foreground">{service.name}</p>
          </div>
          <div>
            <Label>Descrição</Label>
            <p className="px-3 py-1 text-muted-foreground">{service.description}</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
