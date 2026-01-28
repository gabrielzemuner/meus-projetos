import Aluno from "@/data/model/Aluno";
import { ScrollView } from "react-native";
import ResultadoAluno from "./ResultadoAluno";
import { u } from "@/styles/utils";

export interface AprovadosProps {
  alunos: Aluno[];
}

export default function Aprovados(props: AprovadosProps) {
  const aprovados = props.alunos.filter((aluno) => aluno.nota >= 7);
  return (
    <ScrollView contentContainerStyle={[u.gap2]}>
      {aprovados.map((aluno) => (
        // <Text key={aluno.id}>
        //   {aluno.nome} - {aluno.nota}
        // </Text>
        <ResultadoAluno key={aluno.id} aluno={aluno} />
      ))}
    </ScrollView>
  );
}
