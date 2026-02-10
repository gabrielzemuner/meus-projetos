import AlertSooner from '@/components/alert-sooner';
import { Toaster } from '@/components/ui/sonner';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
  <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
    <Toaster richColors position="top-center" expand={true} closeButton />

    <AlertSooner />

    <div className="flex-1 bg-gray-100 dark:bg-[var(--background)]">
      <div className="m-4 flex flex-col gap-4 overflow-x-auto rounded-xl bg-zinc-50 p-4 shadow-lg dark:bg-[var(--card)]">{children}</div>
    </div>
  </AppLayoutTemplate>
);
