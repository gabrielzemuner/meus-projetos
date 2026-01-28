import { Check, ChevronDownIcon } from 'lucide-react';
import * as React from 'react';

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

type Option = { value: string; label: string };

type ComboboxProps = {
  name: string;
  options: Option[];
  placeholder?: string;
  searchPlaceholder?: string;
  defaultValue?: string;
};

export function Combobox({ name, options, placeholder = 'Selecionar...', searchPlaceholder = 'Buscar...', defaultValue = '' }: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue);

  return (
    <>
      <input type="hidden" name={name} value={value} />

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            className={cn(
              'flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs',
              'focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
              "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&>span]:line-clamp-1",
            )}
          >
            <span className={cn(!value && 'text-muted-foreground')}>{value ? options.find((o) => o.value === value)?.label : placeholder}</span>
            <ChevronDownIcon className="h-4 w-4 opacity-50" />
          </button>
        </PopoverTrigger>

        <PopoverContent className="w-[var(--radix-popper-anchor-width)] p-0">
          <Command>
            <CommandInput placeholder={searchPlaceholder} className="h-9" />
            <CommandList>
              <CommandEmpty>Nenhum registro encontrado.</CommandEmpty>
              <CommandGroup>
                {options.map((o) => (
                  <CommandItem
                    key={o.value}
                    value={o.label}
                    onSelect={() => {
                      setValue(o.value);
                      setOpen(false);
                    }}
                  >
                    {o.label}
                    <Check className={cn('ml-auto', value === o.value ? 'opacity-100' : 'opacity-0')} />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}
