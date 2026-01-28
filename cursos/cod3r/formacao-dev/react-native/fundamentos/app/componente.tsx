import Padrao, {
  AlternativoA,
  AlternativoB,
} from "@/components/basicos/Componente";
import { View, StyleSheet } from "react-native";

export default function UtilizandoComponente() {
  return (
    <View style={styles.container}>
      {/* Exemplos de componentes sendo instanciados */}
      <Padrao />
      <AlternativoA />
      <AlternativoB />
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
