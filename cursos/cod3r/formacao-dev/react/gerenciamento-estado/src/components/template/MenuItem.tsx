import { IconProps } from "@tabler/icons-react";
import Link from "next/link";
import { ComponentType } from "react";

interface MenuItemProps {
  //   icone: React.JSX.Element;
  //   icone: React.ComponentType // pra ter disponível props padrão do ícone, necessário tipar da mesma forma que o ícone do tabler-icons é tipado (linha abaixo)
  //   icone: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;

  icone: ComponentType<IconProps>;
  texto: string;
  url: string;
}

export default function MenuItem(props: MenuItemProps) {
  const Icone = props.icone; // Convenção: componente com maiúscula
  return (
    <Link href={props.url} className="flex flex-col items-center gap-2">
      <div className="bg-linear-to-r from-blue-500 to-green-500 rounded-full p-5">
        {/* {props.icone} funciona mas não é possível aplicar estilos */}
        {/* pra aplicar estilos teríamos que criar um clone do elemento */}
        {/* {React.cloneElement(props.icone, {
        size: 90
        })}  */}
        {/* {<props.icone size={90} stroke={1} className="opacity-40" />} */}

        {<Icone size={90} stroke={1} className="opacity-40" />}
      </div>
      <span className="opacity-30 font-black text-3xl">{props.texto}</span>
    </Link>
  );
}
