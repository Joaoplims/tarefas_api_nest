import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Tarefa } from 'src/tarefa/entities/tarefa.entity';
import { CreateProjetoDto } from './create-projeto.dto';

export class UpdateProjetoDto extends PartialType(CreateProjetoDto) {
    @IsString()
    @ApiProperty()
    nome: string;

    @IsString()
    @ApiProperty({
        description: "Informe ano de criação do projeto",
        example:"2023"
    })
    anoExecucao: string;

    
    @IsString()
    @ApiProperty({
        description: "Informe qual o estado de execução da tarefa",
        example:"Em Execução | Parado | Concluido"
    })
    estadoProjeto: string;

    @ApiProperty({
        description: 'Todas as Tarefas que um projeto deve ter. Para atualizar as tarefas, envie um array de numeros. Cada numero representa o ID de uma Tarefa. ',
        type: 'number',
        isArray:true,
        example: "[5,3,7,8,9,1]"
      })
    tarefas: number[];
}
