import AppLayout from '@/layouts/app-layout';
import courses from '@/routes/courses';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: courses.index().url,
  },
];

export default function Index() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div>Cursos</div>
    </AppLayout>
  );
}
