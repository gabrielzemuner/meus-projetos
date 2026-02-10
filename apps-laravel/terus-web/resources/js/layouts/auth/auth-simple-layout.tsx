import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
  name?: string;
  title?: string;
}

export default function AuthSimpleLayout({ children, title }: PropsWithChildren<AuthLayoutProps>) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-slate-100 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            <Link href={route('home')} className="flex items-center gap-2 font-medium">
              <div className="w-28">
                <AppLogoIcon />
              </div>
              <h1 className="text-6xl font-bold">{title}</h1>
              {/* <span className="">{title}</span> */}
            </Link>

            <div className="space-y-2 text-center">{/* <p className="text-center text-sm text-muted-foreground">{description}</p> */}</div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
