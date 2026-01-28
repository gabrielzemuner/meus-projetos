import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.capitulo}>Projeto TODO List</Text>
      <Link href="/tarefas">
        <Text>Tarefas</Text>
      </Link>
      <Text style={style.capitulo}>Ger. de Estado</Text>
      <Link href="/desafio-mega-arc">
        <Text>Desafio Mega (Arc)</Text>
      </Link>
      <Link href="/mega">
        <Text>Desafio Mega (Aula)</Text>
      </Link>
      <Link href="/desafio-mega">
        <Text>Desafio Mega</Text>
      </Link>
      <Link href="/formulario">
        <Text>Formulário</Text>
      </Link>
      <Link href="/contador">
        <Text>Contador</Text>
      </Link>

      <Text style={style.capitulo}>Fundamentos</Text>
      <Link href="/evento">
        <Text>Eventos</Text>
      </Link>
      <Link href="/condicional-extra">
        <Text>Renderização Condicional (Extra)</Text>
      </Link>
      <Link href="/filhos">
        <Text>Componentes Filhos</Text>
      </Link>
      <Link href="/lista">
        <Text>Lista de Componentes</Text>
      </Link>
      <Link href="/condicional">
        <Text>Renderização Condicional</Text>
      </Link>
      <Link href="/propriedade">
        <Text>Passando Props</Text>
      </Link>
      <Link href="/componente">
        <Text>Utilizando Componentes</Text>
      </Link>
      <Link href="/estilo">
        <Text>Estilo Compartilhado</Text>
      </Link>
      <Link href="/modelo">
        <Text>Componente Modelo</Text>
      </Link>
      <Link href="/primeiro">
        <Text>Primeiro Exemplo</Text>
      </Link>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  capitulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
