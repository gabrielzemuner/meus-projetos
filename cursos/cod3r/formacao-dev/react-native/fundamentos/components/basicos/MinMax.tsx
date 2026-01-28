import { Text } from "react-native";

export interface MinMaxProps {
  min: number;
  max: number;
}

export default function MinMax(props: MinMaxProps) {
  return (
    <Text>
      O valor {props.min} é menor que o valor {props.max}
    </Text>
  );
}
