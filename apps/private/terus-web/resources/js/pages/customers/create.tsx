import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { Form, Head, Link } from '@inertiajs/react';

export default function Create() {
  return (
    <AppLayout>
      <Head title="Cadastrar Cliente" />

      <MainHeader title="Cadastrar" subtitle="Cliente">
        <Link href={route('customers.index')}>
          <Button variant="secondary">Listar</Button>
        </Link>
      </MainHeader>

      <Form action={route('customers.store')} method="post">
        {({ errors, processing }) => (
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-1 gap-x-16 gap-y-2 lg:grid-cols-2">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input id="name" name="name" type="text" placeholder="Nome do cliente" className="mt-1" />
                {errors.name && <span className="text-red-600">{errors.name}</span>}
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" name="phone" type="text" placeholder="Telefone do cliente" className="mt-1" />
                {errors.phone && <span className="text-red-600">{errors.phone}</span>}
              </div>
              <div>
                <Label htmlFor="notes">Observações</Label>
                <Textarea id="notes" name="notes" placeholder="Observações do cliente" className="mt-1" />
                {errors.notes && <span className="text-red-600">{errors.notes}</span>}
              </div>
            </div>

            <div>
              <Button type="submit" variant="success" disabled={processing} className="mt-1">
                {processing ? 'Cadastrando...' : 'Cadastrar'}
              </Button>
            </div>
          </div>
        )}
      </Form>
    </AppLayout>
  );
}
