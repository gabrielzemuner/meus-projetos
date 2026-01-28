import If from "@/components/shared/If";
import IfElse from "@/components/shared/IfElse";
import { Text, View, StyleSheet } from "react-native";

export default function Condicional() {
  const nota = 7;

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Renderização Condicional (Extra)</Text>

      {/* <If teste={nota >= 7}>
        <Text>Parabéns, você foi aprovado!</Text>
      </If>
      <If teste={nota < 7}>
        <Text>Infelizmente você foi reprovado!</Text>
      </If> */}

      <IfElse teste={nota >= 7}>
        <Text>Parabéns, você foi aprovado!</Text>
        <Text>Infelizmente você foi reprovado!</Text>
      </IfElse>
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
