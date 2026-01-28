import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export interface ContadorProps {
  titulo: string;
  inicial: number;
}

export default function Contador(props: ContadorProps) {
  //   let numero = 100;

  //   function incrementar() {
  //     numero++;
  //     console.warn(numero);
  //   }

  //   function decrementar() {
  //     numero--;
  //     console.warn(numero);
  //   }

  const [numero, alterarNumero] = useState(props.inicial);

  function incrementar() {
    alterarNumero(numero + 1);
  }

  function decrementar() {
    alterarNumero(numero - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador: {props.titulo}</Text>
      <Text style={styles.destaque}>{numero}</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Pressable onPress={decrementar}>
          <AntDesign name="minus" size={30} />
        </Pressable>
        <Pressable onPress={incrementar}>
          <AntDesign name="plus" size={30} />
        </Pressable>
      </View>
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
  destaque: {
    fontSize: 48,
    fontWeight: "900",
  },
});
