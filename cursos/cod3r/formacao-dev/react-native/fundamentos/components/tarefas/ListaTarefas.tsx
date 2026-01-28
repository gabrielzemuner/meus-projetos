import Tarefa from "@/data/model/Tarefa";
import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";

export interface ListaTarefasProps {
  tarefas: Tarefa[];
  excluirTarefa: (tarefa: Tarefa) => void;
  alternarConclusaoTarefa: (tarefa: Tarefa) => void;
}

export default function ListaTarefas(props: ListaTarefasProps) {
  return (
    <View style={{ gap: 5 }}>
      {props.tarefas.map((tarefa, i) => (
        <View
          key={tarefa.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
            gap: 5,
            padding: 10,
            backgroundColor: tarefa.concluida
              ? "#ddd"
              : i % 2 === 0
              ? "#ffaf7a"
              : "#ffaf7a60",
          }}
        >
          <Text
            style={{
              flex: 1,
              color: tarefa.concluida ? "gray" : "black",
              textDecorationLine: tarefa.concluida ? "line-through" : "none",
              fontSize: 16,
            }}
          >
            {tarefa.descricao}
          </Text>

          {tarefa.concluida ? (
            <AntDesign
              name="reload"
              size={20}
              color="#444"
              onPress={() => props.alternarConclusaoTarefa(tarefa)}
            />
          ) : (
            <AntDesign
              name="check"
              size={20}
              color="green"
              onPress={() => props.alternarConclusaoTarefa(tarefa)}
            />
          )}

          <AntDesign
            name="delete"
            size={20}
            color="red"
            onPress={() => props.excluirTarefa(tarefa)}
          />
        </View>
      ))}
    </View>
  );
}
