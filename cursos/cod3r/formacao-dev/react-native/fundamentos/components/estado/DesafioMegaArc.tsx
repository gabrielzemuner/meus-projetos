import { Pressable, StyleSheet, Text, View } from "react-native";
import CampoTexto from "./CampoTexto";
import useMegaArc from "./Arc/useMegaArc";

// desafio melhorando arquitetura
export default function DesafioMegaArc() {
  const { qtdNumeros, setQtdNumeros, numerosGerados, gerarNumeros } =
    useMegaArc();

  return (
    <View style={styles.container}>
      <CampoTexto
        label="Nome"
        placeholder="Digite a quantidade de números"
        value={qtdNumeros}
        onChangeText={setQtdNumeros}
      />
      <Pressable style={styles.botao} onPress={gerarNumeros}>
        <Text style={styles.botaoTexto}>Gerar Números</Text>
      </Pressable>
      <View style={styles.exibirNumeros}>
        {numerosGerados.length > 0 &&
          numerosGerados.map((numero) => (
            <View key={numero} style={styles.bola}>
              <Text style={styles.bolaTexto}>{numero}</Text>
            </View>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    gap: 10,
  },
  botao: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  botaoTexto: {
    color: "white",
  },
  exibirNumeros: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  bola: {
    width: 50,
    height: 50,
    backgroundColor: "lightgreen",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  bolaTexto: {
    fontWeight: "700",
    fontSize: 25,
  },
});
