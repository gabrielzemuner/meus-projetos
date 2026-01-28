import Mega from "@/components/estado/Mega";
import { Text, View, StyleSheet } from "react-native";

export default function TelaMega() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Desafio Mega (Aula)</Text>
      <Mega />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  texto: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
