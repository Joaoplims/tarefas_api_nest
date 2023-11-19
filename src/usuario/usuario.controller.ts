import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger/dist';

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @ApiBody({ type: CreateUsuarioDto })
  @ApiOperation({ summary: 'Cria um novo Usuário' })
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @ApiOperation({ summary: 'Acessa todos os usuários existentes' })
  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @ApiParam({ name: 'id', required: true, description: 'O ID do usuário' })
  @ApiOperation({ summary: 'Pega um unico usuário' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @ApiParam({ name: 'id', required: true, description: 'O ID do usuário' })
  @ApiOperation({ summary: 'Atualiza os dados de um usuário' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  
  @ApiParam({ name: 'id', required: true, description: 'O ID do usuário' })
  @ApiOperation({ summary: 'Deleta um usuário' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
