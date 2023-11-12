import { PartialType } from '@nestjs/mapped-types';
import { Tarefa } from 'src/tarefa/entities/tarefa.entity';
import { CreateProjetoDto } from './create-projeto.dto';

export class UpdateProjetoDto extends PartialType(CreateProjetoDto) {
    nome: string;
    anoExecucao: string;
    estadoProjeto: string;
    tarefas: number[];
}
