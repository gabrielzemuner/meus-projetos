import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Numero from "./Numero";
import useMega from "@/data/hooks/useMega";

export default function Mega() {
  const { qtdNumeros, incrementarQtd, decrementarQtd, jogo, gerarJogo } =
    useMega();

  return (
    <View style={{ alignItems: "center" }}>
      <Text>Qtd de Números</Text>
      <View style={styles.containerQtd}>
        <AntDesign name="minus" size={24} onPress={decrementarQtd} />
        <View style={styles.qtdNumeros}>
          <Text style={{ fontSize: 24 }}>{qtdNumeros}</Text>
        </View>
        <AntDesign name="plus" size={24} onPress={incrementarQtd} />
      </View>
      <Pressable style={styles.botao} onPress={gerarJogo}>
        <Text style={styles.botaoTexto}>Gerar Jogo</Text>
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          marginTop: 20,
          flexWrap: "wrap",
          width: 300,
        }}
      >
        {jogo.map((numero) => (
          <Numero key={numero} valor={numero} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerQtd: {
    flexDirection: "row",
    alignItems: "center",
    width: 200,
  },
  qtdNumeros: {
    flex: 1,
    alignItems: "center",
  },
  botao: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: 200,
  },
  botaoTexto: {
    color: "white",
  },
});
