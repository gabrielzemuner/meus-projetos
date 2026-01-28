import Tarefas from "@/components/tarefas/Tarefas";
import { StyleSheet, ScrollView } from "react-native";

export default function TelaTarefas() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Tarefas />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    padding: 20,
},
  texto: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
