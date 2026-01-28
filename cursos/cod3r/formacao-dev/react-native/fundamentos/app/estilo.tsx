import { c } from "@/styles/components";
import { u } from "@/styles/utils";
import { Text, View } from "react-native";

export default function Estilo() {
  return (
    <View style={c.center}>
      <Text style={[u.textXl, u.fontBold, u.textBlue500]}>Estilo</Text>
    </View>
  );
}
