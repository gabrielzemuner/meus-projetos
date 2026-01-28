import DesafioMegaArc from "@/components/estado/DesafioMegaArc";
import { Text, View, StyleSheet } from "react-native";

export default function TelaFormulario() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Desafio Mega (Arc)</Text>
      <DesafioMegaArc />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  },
  texto: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
