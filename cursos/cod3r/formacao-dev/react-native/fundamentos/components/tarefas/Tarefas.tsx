import { View } from "react-native";
import FormTarefa from "./FormTarefa";
import ListaTarefas from "./ListaTarefas";
import useTarefas from "@/data/hooks/useTarefas";
import { u } from "@/styles/utils";

export default function Tarefas() {
  const {
    tarefa,
    tarefas,
    adicionarTarefa,
    excluirTarefa,
    alternarConclusaoTarefa,
  } = useTarefas();

  return (
    <View style={{ gap: 20 }}>
      {/* <View style={[u.bgRed500]}>
        <Text>Teste 1234</Text>
      </View> */}
      <FormTarefa tarefa={tarefa} adicionarTarefa={adicionarTarefa} />
      <ListaTarefas
        tarefas={tarefas}
        excluirTarefa={excluirTarefa}
        alternarConclusaoTarefa={alternarConclusaoTarefa}
      />
    </View>
  );
}
