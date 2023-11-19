import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { Put } from '@nestjs/common/decorators';
import { ApiBody, ApiOperation, ApiParam } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger/dist';

@ApiTags('Tarefas')
@Controller('tarefas')
export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) {}


  @ApiBody({ type: CreateTarefaDto })
  @ApiOperation({ summary: 'Cria uma nova Tarefa' })
  @Post()
  create(@Body() createTarefaDto: CreateTarefaDto) {
    return this.tarefaService.create(createTarefaDto);
  }

  @ApiOperation({ summary: 'Acessa todas as tarefas existentes' })
  @Get()
  findAll() {
    return this.tarefaService.findAll();
  }

  @ApiParam({ name: 'id', required: true, description: 'O ID da tarefa' })
  @ApiOperation({ summary: 'Pega uma unica tarefa' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tarefaService.findOne(+id);
  }

  @ApiParam({ name: 'id', required: true, description: 'O ID da tarefa' })
  @ApiOperation({ summary: 'Atualiza os dados de uma tarefa' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTarefaDto: UpdateTarefaDto) {
    return this.tarefaService.update(+id, updateTarefaDto);
  }

  @ApiParam({ name: 'id', required: true, description: 'O ID da tarefa' })
  @ApiOperation({ summary: 'Deleta uma tarefa' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tarefaService.remove(+id);
  }

  @ApiOperation({ summary: 'Deleta TODAS as tarefas' })
  @Delete()
  removeAll(){
     return this.tarefaService.removeAll();
  }
}
