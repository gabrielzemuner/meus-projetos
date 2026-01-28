import { Text, View, StyleSheet } from "react-native";

export default function Modelo() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Componente Modelo</Text>
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
