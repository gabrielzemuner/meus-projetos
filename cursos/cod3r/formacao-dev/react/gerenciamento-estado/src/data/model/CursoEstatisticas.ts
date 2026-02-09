import Capitulo from "./Capitulo";

// Utils separado para formatação de tempo
class TimeFormatter {
  static formatarDuracao(segundos: number): string {
    const HORA_EM_SEGUNDOS = 3600;
    const MINUTO_EM_SEGUNDOS = 60;

    const horas = Math.floor(segundos / HORA_EM_SEGUNDOS);
    const minutos = Math.floor(
      (segundos % HORA_EM_SEGUNDOS) / MINUTO_EM_SEGUNDOS,
    );

    return `${horas}h ${minutos}m`;
  }
}

export default class CursoEstatisticas {
  constructor(private capitulos: Capitulo[]) {}

  // Método auxiliar privado - evita repetição
  private get todasAulas() {
    return this.capitulos.flatMap((cap) => cap.aulas);
  }

  qtdeDeAulas() {
    return this.todasAulas.length;
  }

  aulasConcluidas() {
    return this.todasAulas.filter((aula) => aula.concluida).length;
  }

  duracaoTotalEmSegundos() {
    return this.todasAulas.reduce((total, aula) => total + aula.duracao, 0);
  }

  duracaoTotal() {
    return TimeFormatter.formatarDuracao(this.duracaoTotalEmSegundos());
  }

  duracaoConcluidaEmSegundos() {
    return this.todasAulas
      .filter((aula) => aula.concluida)
      .reduce((total, aula) => total + aula.duracao, 0);

    // resolução professor
    // return this.capitulos.reduce((duracao, capitulo) => {
    //   return (
    //     duracao +
    //     capitulo.aulas
    //       .filter((a) => a.concluida)
    //       .reduce((duracao, aula) => duracao + aula.duracao, 0)
    //   );
    // }, 0);
  }

  duracaoConcluida() {
    return TimeFormatter.formatarDuracao(this.duracaoConcluidaEmSegundos());
  }

  percentualConclusao() {
    const total = this.duracaoTotalEmSegundos();
    if (total === 0) return 0; // evita divisão por zero

    return Math.floor((this.duracaoConcluidaEmSegundos() / total) * 100);
  }
}
