import ParImpar from "@/components/basicos/ParImpar";
import { Text, View, StyleSheet } from "react-native";

export default function Condicional() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Renderização Condicional</Text>
      <ParImpar numero={1} />
      <ParImpar numero={2} />
      <ParImpar numero={3} />
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
