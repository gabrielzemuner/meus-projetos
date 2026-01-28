import { Text } from "react-native";

export interface ParImparProps {
  numero: number;
}

export default function ParImpar(props: ParImparProps) {
  const par = props.numero % 2 === 0;

  // Estilo 1
  //   if (par) {
  //     return <Text>Número {props.numero} é par!</Text>;
  //   } else {
  //     return <Text>Número {props.numero} é ímpar!</Text>;
  //   }

  // Estilo 2
  return (
    <Text>
      O número {props.numero} é {par ? "par" : "ímpar"}!
    </Text>
  );
}
