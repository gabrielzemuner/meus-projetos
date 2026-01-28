import Formulario from "@/components/estado/Formulario";
import { Text, View, StyleSheet } from "react-native";

export default function TelaFormulario() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Cadastro de Usuário</Text>
      <Formulario />
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
