import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useForm } from '@inertiajs/react';

type ConfirmDeleteDialogProps = {
  id: number;
  routeName: string;
};

export default function ConfirmDeleteDialog({ id, routeName }: ConfirmDeleteDialogProps) {
  const { delete: destroy, processing } = useForm();

  const handleDelete = () => {
    destroy(route(routeName, id));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Apagar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tem certeza?</DialogTitle>
          <DialogDescription>Você não poderá reverter esta ação!</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancelar
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive" onClick={handleDelete} disabled={processing}>
              Apagar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
