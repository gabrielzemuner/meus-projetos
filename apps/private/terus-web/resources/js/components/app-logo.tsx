import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
  return (
    <>
      <div className="flex size-14 items-center justify-center">
        <AppLogoIcon />
      </div>
      <div className="ml-1 grid flex-1 text-left text-sm">
        <span className="mb-0.5 truncate leading-tight font-semibold text-3xl">Terus</span>
      </div>
    </>
  );
}
