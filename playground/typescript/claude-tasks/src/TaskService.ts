import { Task } from "./Task.js";

export class TaskService {
  #tasks: Task[] = [];

  // CREATE
  criarTask(titulo: string, descricao: string): Task {
    // criar a task
    const novaTask = new Task(titulo, descricao);

    // adicionar no array
    this.#tasks.push(novaTask);

    // retornar a task
    return novaTask;
  }

  // READ
  listarTasks(): Task[] {
    return [...this.#tasks];
  }

  // READ (específico)
  buscarPorId(id: string): Task | undefined {
    return this.#tasks.find((item) => item.id === id);
  }

  editarTask(id: string, titulo: string, descricao: string) {
    const task = this.buscarPorId(id);
    if (!task) throw new Error("Task não encontrada");
    task.editar(titulo, descricao);
  }

  // DELETE
  excluirTask(id: string): void {
    const novasTasks = this.#tasks.filter((item) => item.id !== id);
    this.#tasks = novasTasks;
  }
}

const service = new TaskService();
console.log(service);
// const t1 = service.criarTask("Tarefa 1", "teste");
// const t2 = service.criarTask("Tarefa 2", "teste");
// const t3 = service.criarTask("Tarefa 3", "teste");

// console.log("IDs criados:");
// console.log("t1.id:", t1.id);
// console.log("t2.id:", t2.id);
// console.log("t3.id:", t3.id);

// console.log("\nAntes de excluir:", service.listarTasks());

// console.log("\nExcluindo:", t1.id);
// service.excluirTask(t1.id);

// console.log("\nDepois de excluir:", service.listarTasks());
