import MinMax from "@/components/basicos/MinMax";
import { Text, View, StyleSheet } from "react-native";

export default function Propriedade() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Passando Props</Text>
      <MinMax min={3} max={20} />
      <MinMax min={300} max={3255} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
