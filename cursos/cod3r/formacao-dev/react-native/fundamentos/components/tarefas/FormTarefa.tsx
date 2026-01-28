import Tarefa from "@/data/model/Tarefa";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";

export interface FormTarefaProps {
  tarefa: Partial<Tarefa>;
  adicionarTarefa: (tarefa: Partial<Tarefa>) => void;
}

export default function FormTarefa(props: FormTarefaProps) {
  const [descricao, setDescricao] = useState<string>(
    props.tarefa.descricao ?? ""
  );

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TextInput
        placeholder="Digite a descrição da tarefa"
        value={descricao}
        onChangeText={setDescricao}
        style={{
          flex: 1,
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#ffaf7a",
        }}
      />
      <Pressable
        onPress={() => {
          props.adicionarTarefa({ ...props.tarefa, descricao });
          setDescricao("");
        }}
      >
        <AntDesign name="plus" size={24} color="#ff6600" />
      </Pressable>
    </View>
  );
}
