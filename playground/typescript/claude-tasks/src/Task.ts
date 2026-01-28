type Status = "PENDENTE" | "EM_PROGRESSO" | "CONCLUIDA";

export class Task {
  #id: string;
  titulo: string;
  descricao: string;
  status: Status;
  dataCriacao: Date;
  dataConclusao: Date | undefined;

  constructor(titulo: string, descricao: string) {
    this.#validarCampos(titulo, descricao);

    this.#id = crypto.randomUUID(); // Date.now().toString(); //
    this.titulo = titulo;
    this.descricao = descricao;
    this.status = "PENDENTE";
    this.dataCriacao = new Date();
    this.dataConclusao = undefined;
  }

  editar(novoTitulo: string, novaDescricao: string): void {
    this.#validarCampos(novoTitulo, novaDescricao);

    this.titulo = novoTitulo;
    this.descricao = novaDescricao;
  }

  estaConcluida(): boolean {
    return this.status === "CONCLUIDA";
  }

  #validarCampos(titulo: string, descricao: string): void {
    if (!titulo.trim() || !descricao.trim()) {
      throw new Error("O campo precisa estar preenchido.");
    }
  }

  get id(): string {
    return this.#id;
  }

  mudarStatus(novoStatus: Status): void {
    this.status = novoStatus;

    this.dataConclusao = novoStatus === "CONCLUIDA" ? new Date() : undefined;

    // if (novoStatus === "CONCLUIDA") {
    //   this.dataConclusao = new Date();
    // } else {
    //   // PENDENTE ou EM_PROGRESSO
    //   this.dataConclusao = undefined;
    // }
  }
}

// const task1 = new Task("Estudar TypeScript", "Aprender sobre classes");
// console.log(task1);
// console.log("ID:", task1.id);
// console.log("Está concluída?", task1.estaConcluida());

// task1.marcarConcluida();
// console.log("Agora está concluída?", task1.estaConcluida());
// console.log(task1);
