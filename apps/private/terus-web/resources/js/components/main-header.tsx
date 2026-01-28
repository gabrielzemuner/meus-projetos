import HorizontalLine from './horizontal-line';

type MainHeaderProps = {
  children?: React.ReactNode;
  title: string;
  subtitle?: string;
};

export default function MainHeader({ children, title, subtitle }: MainHeaderProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg">{title}</h1>
          <h2 className="text-sm text-gray-500">{subtitle}</h2>
        </div>
        <div className="flex gap-2">{children}</div>
      </div>
      <HorizontalLine />
    </>
  );
}
