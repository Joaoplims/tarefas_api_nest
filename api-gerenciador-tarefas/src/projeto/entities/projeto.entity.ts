import { ApiProperty } from "@nestjs/swagger";
import { Tarefa } from "src/tarefa/entities/tarefa.entity";

export class Projeto {

    @ApiProperty({
        description: "ID do projeto",
        type:'number'
    })
    id: number;

    @ApiProperty({
        description: "Nome do projeto",
        type:'string'
    })
    nome: string;

    @ApiProperty({
        description: "Ano em que a execução do projeto foi iniciada",
        type:'string'
    })
    anoExecucao: string;

    @ApiProperty({
        description: "Informe qual o estado de execução do projeto",
        example:"Em Execução | Parado | Concluido"
    })
    estadoProjeto: string;

    @ApiProperty({
        description: "Lista de tarefas de um projeto",
        type : 'object'
    })
    tarefas: Tarefa[];

}
