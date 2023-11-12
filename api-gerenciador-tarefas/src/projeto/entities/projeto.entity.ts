import { Tarefa } from "src/tarefa/entities/tarefa.entity";

export class Projeto {
    id: number;
    nome: string;
    anoExecucao: string;
    estadoProjeto: string;
    tarefas: Tarefa[];

}
