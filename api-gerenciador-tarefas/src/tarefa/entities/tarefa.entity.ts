import { ApiProperty } from "@nestjs/swagger";


export class Tarefa {

    @ApiProperty({
        description: "ID da tarefa",
        type: 'number'
    })
    id : number;

    @ApiProperty({
        description: "Nome da tarefa",
        type: 'string'
    })
    tituloTarefa : string;

    @ApiProperty({
        description: "Descrição da tarefa",
        type: 'string'
    })
    dscTarefa : string;

    @ApiProperty({
        description: "Estado de conclusão da tarefa",
        type: 'string',
        example:"Em Execução | Parado | Concluido"
    })
    
    statusConcluido : string;


}
