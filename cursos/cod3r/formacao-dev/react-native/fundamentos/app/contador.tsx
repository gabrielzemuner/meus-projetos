import Contador from "@/components/estado/Contador";
import { View, StyleSheet } from "react-native";

export default function TelaContador() {
  return (
    <View style={styles.container}>
      <Contador titulo="Participantes" inicial={10} />
      <Contador titulo="Qtde de Produtos" inicial={0} />
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
