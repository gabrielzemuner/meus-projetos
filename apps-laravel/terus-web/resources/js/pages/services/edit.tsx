import ConfirmDeleteDialog from '@/components/confirm-delete-dialog';
import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { Service } from '@/types/service';
import { Form, Head, Link } from '@inertiajs/react';

type EditProps = {
  service: Service;
};

export default function Edit({ service }: EditProps) {
  return (
    <AppLayout>
      <Head title="Editar Serviço" />

      <MainHeader title="Editar" subtitle="Serviço">
        <Link href={route('services.index')}>
          <Button variant="secondary">Listar</Button>
        </Link>
        <Link href={route('services.show', { id: service.id })}>
          <Button variant="info">Visualizar</Button>
        </Link>
        <ConfirmDeleteDialog routeName="services.destroy" id={service.id} />
      </MainHeader>

      <Form action={route('services.update', { id: service.id })} method="put">
        {({ errors, processing }) => (
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-1 gap-x-16 gap-y-2 lg:grid-cols-2">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input id="name" name="name" type="text" placeholder="Nome do serviço" className="mt-1" defaultValue={service.name} />
                {errors.name && <span className="text-red-600">{errors.name}</span>}
              </div>
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Descrição do serviço"
                  className="mt-1"
                  defaultValue={service.description}
                />
                {errors.description && <span className="text-red-600">{errors.description}</span>}
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
