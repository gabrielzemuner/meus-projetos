import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Head, router } from '@inertiajs/react';
import { toast } from 'sonner';

type Item = {
  id: number;
  to: string;
  customer: string;
  service: string;
  message: string;
  recurrence: string;
  start_date: string | null;
  next_run_at: string | null;
};

export default function DispatchTest({ items }: { items: Item[] }) {
  const delay = 1500;

  function simulateSend(onDone?: () => void) {
    if (!items.length) {
      toast('Nada para disparar', {
        description: 'Nenhum reminder ativo e devido para hoje.',
      });
      onDone?.();
      return;
    }

    items.forEach((item, index) => {
      setTimeout(() => {
        toast(`Enviando para ${item.customer}`, {
          description: `📱 ${item.to} • ${item.service}\n\n${item.message}`,
        });
      }, index * delay);
    });

    setTimeout(
      () => {
        toast('Simulação finalizada', {
          description: `Total: ${items.length} mensagens simuladas.`,
        });
        onDone?.();
      },
      items.length * delay + 200,
    );
  }

  function runAndUpdateDb() {
    // 1) mostra os toasts
    simulateSend(() => {
      // 2) ao terminar, chama backend pra atualizar next_run_at
      router.post(route('dispatch.run'), {}, { preserveScroll: true });
    });
  }

  function resetDb() {
    router.post(route('dispatch.reset'), {}, { preserveScroll: true });
  }

  return (
    <AppLayout>
      <Head title="Teste de Disparos" />

      <MainHeader title="Teste" subtitle="Disparos de lembretes">
        <div className="flex gap-2">
          <Button variant="success" onClick={() => simulateSend()}>
            Simular disparo
          </Button>

          <Button variant="info" onClick={runAndUpdateDb}>
            Simular + atualizar banco
          </Button>

          <Button variant="warning" onClick={resetDb}>
            Resetar configs no banco
          </Button>
        </div>
      </MainHeader>

      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">
          Itens de disparo carregados: <b>{items.length}</b>
        </div>

        <div className="rounded-md border p-3 text-sm">
          {items.length === 0 ? (
            <div>Nenhum reminder devido.</div>
          ) : (
            <ul className="space-y-2">
              {items.map((i) => (
                <li key={i.id} className="rounded border p-2">
                  <div>
                    <b>{i.customer}</b> ({i.to})
                  </div>
                  <div className="text-muted-foreground">
                    {i.service} • {i.recurrence}
                  </div>
                  <div className="mt-1 whitespace-pre-wrap">{i.message}</div>
                  <div className="mt-1 text-xs text-muted-foreground">next_run_at: {i.next_run_at ?? '-'}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
