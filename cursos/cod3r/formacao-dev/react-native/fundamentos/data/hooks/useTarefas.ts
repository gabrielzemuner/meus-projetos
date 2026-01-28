import { useEffect, useState } from "react";
import Tarefa from "../model/Tarefa";
import Id from "../model/Id";
import useLocalStorage from "./useLocalStorage";

export default function useTarefas() {
  const [tarefa, setTarefa] = useState<Partial<Tarefa>>({});
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const { alterarItem, obterItem } = useLocalStorage();

  useEffect(() => {
    carregarTarefas()
  }, [])

  async function carregarTarefas() {
    const tarefasSalvas = await obterItem("tarefas");
    if (Array.isArray(tarefasSalvas)) setTarefas(tarefasSalvas);
  }

  function adicionarTarefa(tarefa: Partial<Tarefa>) {
    if (tarefa.descricao) {
      const novaTarefa: Tarefa = {
        id: Id.gerar(),
        descricao: tarefa.descricao,
        concluida: false,
      };

      // inserir no estado
      alterarTarefas([...tarefas, novaTarefa]);

      // limpar input
      setTarefa({});
    }
  }

  function excluirTarefa(tarefa: Tarefa) {
    const tarefasRestantes = tarefas.filter((t) => t.id !== tarefa.id);
    alterarTarefas(tarefasRestantes);
  }

  function alternarConclusaoTarefa(tarefa: Tarefa) {
    // Jeito 1 -> chatgpt, jeito correto pois pega o valor do estado anterior
    // setTarefas((tarefasAtuais) =>
    //   tarefasAtuais.map((t) =>
    //     t.id === tarefa.id ? { ...t, concluida: !t.concluida } : t
    //   )
    // );

    // Jeito 2 -> jeito do professor cod3r
    // const tarefasAtualizadas = tarefas.map((t) =>
    //   t.id === tarefa.id ? { ...t, concluida: !t.concluida } : t
    // );
    // setTarefas(tarefasAtualizadas);

    // Jeito 3 - jeito do professor codante
    // const novasTarefas = tarefas.map((t) => {
    //   if (t.id === tarefa.id) {
    //     t.concluida = !t.concluida;
    //   }

    //   return t;
    // });
    // setTarefas(novasTarefas);

    // Novo jeito para usar o toggle com async storage (igual o Jeito 2 mas com a função criada para usar async storage)
    const tarefasAtualizadas = tarefas.map((t) =>
      t.id === tarefa.id ? { ...t, concluida: !t.concluida } : t
    );
    alterarTarefas(tarefasAtualizadas);
  }

  function alterarTarefas(tarefas: Tarefa[]) {
    setTarefas(tarefas);
    alterarItem("tarefas", tarefas);
  }

  return {
    tarefa,
    setTarefa,
    tarefas,
    adicionarTarefa,
    excluirTarefa,
    alternarConclusaoTarefa,
  };
}
