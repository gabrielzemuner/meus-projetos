import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Command, CommandInput } from "@/components/ui/command";

type Option = { value: string; label: string };

type Props = {
  name: string;
  options: Option[];
  placeholder?: string;
  searchPlaceholder?: string;
};

export function SearchableSelect({
  name,
  options,
  placeholder = "Selecione...",
  searchPlaceholder = "Buscar...",
}: Props) {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((o) => o.label.toLowerCase().includes(q));
  }, [options, query]);

  return (
    <Select
      name={name}
      onOpenChange={(open) => {
        if (open) setQuery(""); // abre “limpo” igual Select normal
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {/* Busca */}
        <div className="p-2">
          <Command shouldFilter={false} className="border-0 p-0 shadow-none">
            <CommandInput
              placeholder={searchPlaceholder}
              value={query}
              onValueChange={setQuery}
              className="h-9"
              // importante: não deixar o Select “capturar” teclas e bagunçar digitação
              onKeyDown={(e) => e.stopPropagation()}
            />
          </Command>
        </div>

        {/* Lista */}
        <SelectGroup>
          {filtered.length === 0 ? (
            <div className="px-2 py-2 text-sm text-muted-foreground">
              Nenhum registro encontrado.
            </div>
          ) : (
            filtered.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
              </SelectItem>
            ))
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
