import { Combobox } from '@/components/combobox';
import MainHeader from '@/components/main-header';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { Form, Head, Link } from '@inertiajs/react';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { recurrenceOptions } from '.';

export type Option = { id: string; name: string };

type CreateProps = {
  customers: Option[];
  services: Option[];
};

export default function Create({ customers, services }: CreateProps) {
  const [message, setMessage] = useState(''); // controla o textarea
  const [open, setOpen] = useState(false); // modal
  const [selected, setSelected] = useState(''); // radio selecionado
  const [suggestions, setSuggestions] = useState<string[]>([]);

  function getFormValuesFromEvent(e: React.MouseEvent) {
    const form = (e.currentTarget as HTMLElement).closest('form');
    if (!form) return null;

    const data = new FormData(form);
    console.log(data);

    return {
      customer_id: String(data.get('customer_id') ?? ''),
      service_id: String(data.get('service_id') ?? ''),
      start_date: String(data.get('start_date') ?? ''),
      recurrence: String(data.get('recurrence') ?? ''),
      message: String(data.get('message') ?? ''),
    };
  }

  function handleGenerateAI(e: React.MouseEvent) {
    const v = getFormValuesFromEvent(e);
    if (!v) return;

    const customerName = customers.find((c) => String(c.id) === v.customer_id)?.name;
    const serviceName = services.find((s) => String(s.id) === v.service_id)?.name;
    const recurrenceLabel = recurrenceOptions.find((r) => r.value === v.recurrence)?.label;

    if (!v.customer_id) return void toast.error('Selecione um cliente.');
    if (!v.service_id) return void toast.error('Selecione um serviço.');
    if (!v.start_date) return void toast.error('Selecione a data de início.');
    if (!v.recurrence) return void toast.error('Selecione a recorrência.');

    const payloadForAI = {
      customer_id: v.customer_id,
      customer_name: customerName,
      service_id: v.service_id,
      service_name: serviceName,
      recurrence: v.recurrence,
      recurrence_label: recurrenceLabel,
      start_date: v.start_date,
      message: v.message,
    };

    toast.success('Ok! Dados validados. Gerando mensagem...');
    console.log(payloadForAI);

    // sugestões fixas pra teste (depois você troca por retorno da IA)
    const s = [
      `Oi ${customerName}! Passando pra lembrar do seu ${serviceName} no dia ${v.start_date}. Posso confirmar?`,
      `${customerName}, lembrete: ${serviceName} em ${v.start_date}. Se precisar remarcar, me avise 🙂`,
      `Olá ${customerName}! Seu ${serviceName} está agendado para ${v.start_date}. Te espero!`,
    ];

    setSuggestions(s);
    // setSelected(s[0]); // seleciona a primeira por padrão
    setOpen(true); // abre modal
  }

  return (
    <AppLayout>
      <Head title="Cadastrar Lembrete" />

      <MainHeader title="Cadastrar" subtitle="Lembrete">
        <Link href={route('reminders.index')}>
          <Button variant="secondary">Listar</Button>
        </Link>
      </MainHeader>

      <Form action={route('reminders.store')} method="post">
        {({ errors, processing }) => (
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-1 gap-x-16 gap-y-2 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="customer_id">Nome do Cliente (Combobox)</Label>
                <Combobox name="customer_id" options={customers.map((c) => ({ value: String(c.id), label: c.name }))} />
                {errors.customer_id && <span className="text-red-600">{errors.customer_id}</span>}
              </div>
              <div>
                <Label htmlFor="service_id">Serviço (Select)</Label>
                <Select name="service_id">
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
                <Input id="start_date" name="start_date" type="date" placeholder="Telefone do cliente" className="custom-date mt-1" />
                {errors.start_date && <span className="text-red-600">{errors.start_date}</span>}
              </div>
              <div>
                <Label htmlFor="recurrence">Recorrência (Select)</Label>
                <Select name="recurrence">
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
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="sugestões de mensagem com chatgpt/copilot -> buscar algo gratuito para testes"
                    className="mt-1"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button type="button" variant="outline" className="please-click-me absolute right-2 bottom-2" onClick={handleGenerateAI}>
                    <Sparkles />
                    <span>Gerar com IA</span>
                  </Button>
                </div>
                {errors.message && <span className="text-red-600">{errors.message}</span>}
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Escolha uma mensagem</DialogTitle>
            <DialogDescription>Selecione uma das sugestões para preencher a mensagem do lembrete.</DialogDescription>
          </DialogHeader>

          <RadioGroup value={selected} onValueChange={setSelected} className="space-y-3">
            {suggestions.map((text, idx) => (
              <label key={idx} className="flex cursor-pointer gap-3 rounded-md border p-3">
                <RadioGroupItem value={text} />
                <span className="text-sm whitespace-pre-wrap">{text}</span>
              </label>
            ))}
          </RadioGroup>

          <DialogFooter className="gap-2">
            <Button variant="secondary" type="button" onClick={() => setOpen(false)}>
              Cancelar
            </Button>

            <Button
              variant="success"
              type="button"
              onClick={() => {
                setMessage(selected); // preenche textarea
                setOpen(false); // fecha modal
              }}
            >
              Usar mensagem
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
}
