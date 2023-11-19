import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProjetoService } from './projeto.service';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger/dist';

@ApiTags('Projetos')
@Controller('projetos')
export class ProjetoController {
  constructor(private readonly projetoService: ProjetoService) {}

  @ApiOperation({ summary: 'Cria um projeto' })
  @ApiBody({ type: CreateProjetoDto })
  @Post()
  create(@Body() createProjetoDto: CreateProjetoDto) {
    return this.projetoService.create(createProjetoDto);
  }

  @ApiOperation({ summary: 'Acessa todos os projetos existentes' })
  @Get()
  findAll() {
    return this.projetoService.findAll();
  }

  @ApiParam({ name: 'id', required: true, description: 'O ID do projeto' })
  @ApiOperation({ summary: 'Pega um unico projeto' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projetoService.findOne(+id);
  }

  @ApiParam({ name: 'id', required: true, description: 'O ID do projeto' })
  @ApiOperation({ summary: 'Atualiza os dados de um projeto' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProjetoDto: UpdateProjetoDto) {
    return this.projetoService.update(+id, updateProjetoDto);
  }

  @ApiParam({ name: 'id', required: true, description: 'O ID do projeto' })
  @ApiOperation({ summary: 'Deleta um projeto' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projetoService.remove(+id);
  }

  @ApiOperation({ summary: 'Deleta TODOS os projeto' })
  @Delete()
  removeAll(){
    return this.projetoService.removeAll();
  }
}
