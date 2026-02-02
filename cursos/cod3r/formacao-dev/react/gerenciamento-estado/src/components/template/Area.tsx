const bgColor = {
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  sky: "bg-sky-500",
};

interface AreaProps {
  titulo: string;
  sumario?: string;
  children: React.ReactNode;
  cor: keyof typeof bgColor;
}

export default function Area(props: AreaProps) {
  return (
    <div
      className={`flex flex-col items-center rounded-md w-full ${
        bgColor[props.cor]
      }`}
    >
      <div
        className={`flex items-center ${
          props.sumario ? "justify-between" : "justify-center"
        } w-full bg-black/20 h-14 text-3xl font-black opacity-70`}
      >
        <span className="px-4">{props.titulo}</span>
        {props.sumario && (
          <span className="flex items-center px-4 bg-black/20 h-full">
            {props.sumario}
          </span>
        )}
      </div>
      <div className="p-7">{props.children}</div>
    </div>
  );
}
