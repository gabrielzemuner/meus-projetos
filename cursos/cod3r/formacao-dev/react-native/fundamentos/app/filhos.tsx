import Pai from "@/components/basicos/Pai";
import { Text, View, StyleSheet } from "react-native";

export default function Filhos() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Componentes Filhos</Text>
      <Pai>
        <Text>Filho #1</Text>
        <Text>Filho #2</Text>
        <Text>Filho #3</Text>
      </Pai>
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
