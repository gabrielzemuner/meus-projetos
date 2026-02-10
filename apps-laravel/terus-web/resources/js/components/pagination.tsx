import { Link as LinkT } from '@/types/pagination';
import { Link } from '@inertiajs/react';

type PaginationProps = {
  links: LinkT[];
};

export default function Pagination({ links }: PaginationProps) {
  return (
    <nav className="mt-4 text-center">
      {links.map((link) => (
        <Link
          preserveScroll
          href={link.url || ''}
          key={link.label}
          className={
            'm-0.5 inline-block rounded-lg px-3 py-2 text-xs text-zinc-200 ' +
            (link.active ? 'bg-zinc-700 ' : ' ') +
            (!link.url ? 'cursor-not-allowed !text-zinc-500 ' : 'hover:bg-zinc-700')
          }
          dangerouslySetInnerHTML={{ __html: link.label }}
        ></Link>
      ))}
    </nav>
  );
}
