import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CampoTexto from "./CampoTexto";

export default function DesafioMega() {
  const [qtdNumeros, setQtdNumeros] = useState("");
  const [numerosGerados, setNumerosGerados] = useState<number[]>([]);

  function gerarNumeros() {
    if (!qtdNumeros.trim()) return alert("Você precisa digitar um número.");

    const qtd = Number(qtdNumeros);

    if (isNaN(qtd)) return alert("Você precisa digitar um número válido.");

    if (!Number.isInteger(qtd)) return alert("Digite um número inteiro.");

    // validar intervalo depois de ter a certeza que é número (ordem das validações importa)
    if (qtd < 6 || qtd > 15)
      return alert("Qtd. Números precisa ser entre 6 e 15.");

    // limpar input
    // setQtdNumeros("");
    // console.log("passou", qtd);

    // for (let i = 0; i < qtd; i++) {
    //   const resultadoAleatorio = Math.ceil(Math.random() * 60);
    //   // resultado.push(resultadoAleatorio);

    //   // considerar apenas números únicos (mega-sena)...
    //   // só adiciona se for novo
    //   if (!resultado.includes(resultadoAleatorio)) {
    //     resultado.push(resultadoAleatorio);
    //   }
    // }

    const resultado: number[] = [];
    while (resultado.length < qtd) {
      const resultadoAleatorio = Math.floor(Math.random() * 60) + 1;
      if (!resultado.includes(resultadoAleatorio)) {
        resultado.push(resultadoAleatorio);
      }
    }

    setNumerosGerados(resultado.sort((a, b) => a - b));
  }

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
