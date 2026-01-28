import { Text, View } from "react-native";

export interface NumeroProps {
  valor: number;
}

export default function Numero(props: NumeroProps) {
  return (
    <View
      style={{
        height: 50,
        width: 50,
        backgroundColor: "#000",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
        {props.valor}
      </Text>
    </View>
  );
}
