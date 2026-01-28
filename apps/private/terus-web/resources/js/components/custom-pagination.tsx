import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { MetaPagination } from '@/types/pagination';

type Props = {
  pagination: MetaPagination;
};

export default function CustomPagination({ pagination }: Props) {
  const { links, from, to, total } = pagination;
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-zinc-400">
        Mostrando de {from} até {to} de {total} registros
      </span>
      <Pagination>
        <PaginationContent>
          {links.map((link, index) => {
            const label = link.label.toLowerCase();

            if (label.includes('previous')) {
              return (
                <PaginationItem key={index}>
                  <PaginationPrevious href={link.url || '#'} />
                </PaginationItem>
              );
            }

            if (label.includes('next')) {
              return (
                <PaginationItem key={index}>
                  <PaginationNext href={link.url || '#'} />
                </PaginationItem>
              );
            }

            if (label === '...') {
              return (
                <PaginationItem key={index}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }

            return (
              <PaginationItem key={index}>
                <PaginationLink href={link.url || '#'} isActive={link.active} dangerouslySetInnerHTML={{ __html: link.label }} />
              </PaginationItem>
            );
          })}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
