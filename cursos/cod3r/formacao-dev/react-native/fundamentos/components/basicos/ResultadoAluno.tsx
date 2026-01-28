import Aluno from "@/data/model/Aluno";
import { u } from "@/styles/utils";
import { Text, View } from "react-native";

export interface ResultadoAlunoProps {
  aluno: Aluno;
}

export default function ResultadoAluno(props: ResultadoAlunoProps) {
  const { aluno } = props;

  return (
    <View style={[u.bgBlack, u.p4, u.roundedSm]}>
      <Text style={[u.textWhite, u.textXl]}>{aluno.nome}</Text>
      <Text style={[u.textGray500, u.textBase]}>{aluno.nota}</Text>
    </View>
  );
}
