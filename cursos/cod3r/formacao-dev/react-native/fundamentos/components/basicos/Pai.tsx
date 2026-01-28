import { View } from "react-native";

export interface PaiProps {
  children: any;
}

export default function Pai(props: PaiProps) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 200,
        width: 200,
        backgroundColor: "red",
      }}
    >
      <View style={{ backgroundColor: "white" }}>{props.children}</View>
    </View>
  );
}
