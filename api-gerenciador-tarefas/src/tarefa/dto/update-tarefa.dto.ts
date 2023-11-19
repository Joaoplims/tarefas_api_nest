import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateTarefaDto } from './create-tarefa.dto';

export class UpdateTarefaDto extends PartialType(CreateTarefaDto) 
{
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
