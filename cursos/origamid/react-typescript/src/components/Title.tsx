type TitleProps = {
  title: string;
  subtitle?: string;
};

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <div>
      <h1 className="text-lg font-black">{title}</h1>
      {subtitle && <h2 className="text-zinc-500">{subtitle}</h2>}
    </div>
  );
}
