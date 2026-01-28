import DesafioMega from "@/components/estado/DesafioMega";
import { Text, View, StyleSheet } from "react-native";

export default function TelaFormulario() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Desafio Mega</Text>
      <DesafioMega />
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
