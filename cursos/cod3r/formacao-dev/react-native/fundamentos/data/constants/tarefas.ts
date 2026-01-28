import Id from "../model/Id";
import Tarefa from "../model/Tarefa";

export default [
  { id: Id.gerar(), descricao: "Estudar React Native", concluida: false },
  { id: Id.gerar(), descricao: "Estudar TypeScript", concluida: false },
  { id: Id.gerar(), descricao: "Estudar React", concluida: true },
  { id: Id.gerar(), descricao: "Estudar Node", concluida: true },
  { id: Id.gerar(), descricao: "Estudar Java", concluida: false },
] as Tarefa[];
