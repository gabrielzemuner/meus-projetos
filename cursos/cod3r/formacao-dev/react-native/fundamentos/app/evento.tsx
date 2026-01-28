import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Evento1() {
  function executar() {
    alert("Executou!");
    console.warn("executou!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Eventos #1</Text>
      <Pressable style={styles.botao} onPress={executar}>
        <Text style={{ color: "white" }}>Executar</Text>
      </Pressable>
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
  botao: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
});
