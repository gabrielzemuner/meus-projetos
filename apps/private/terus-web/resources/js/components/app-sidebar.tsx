import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { ClipboardList, GraduationCap, LayoutGrid, Logs, User, Users } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutGrid,
  },
  {
    title: 'Usuários',
    href: '/usuarios',
    icon: Users,
  },
  {
    title: 'Cadastro de Clientes',
    href: '/clientes',
    icon: User,
  },
  {
    title: 'Cadastro de Serviços',
    href: '/servicos',
    icon: ClipboardList,
  },
  {
    title: 'Cadastrar Lembretes',
    href: '/lembretes',
    icon: Logs,
  },
  {
    title: 'Teste Disparar Lembretes',
    href: '/disparo-lembretes',
    icon: Logs,
  },
];

const otherNavItems: NavItem[] = [
  {
    title: 'Cursos',
    href: '/cursos',
    icon: GraduationCap,
  },
];



// const footerNavItems: NavItem[] = [
//     {
//         title: 'Repository',
//         href: 'https://github.com/laravel/react-starter-kit',
//         icon: Folder,
//     },
//     {
//         title: 'Documentation',
//         href: 'https://laravel.com/docs/starter-kits#react',
//         icon: BookOpen,
//     },
// ];

export function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas" variant="sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard" prefetch>
                <AppLogo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainNavItems} otherItems={otherNavItems} />
      </SidebarContent>

      <SidebarFooter>
        {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
