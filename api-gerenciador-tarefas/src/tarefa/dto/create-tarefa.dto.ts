import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { IsString } from "class-validator";

export class CreateTarefaDto {

    @IsString()
    @ApiProperty()
    tituloTarefa : string;
    @IsString()
    @ApiProperty()
    dscTarefa : string;
    @IsString()
    @ApiProperty({
        description: "Informe qual o estado de execução da tarefa",
        example:"Em Execução | Parado | Concluido"
    })
    statusConcluido : string;

}
