import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { ProjetoModule } from 'src/projeto/projeto.module';

@Module({
  imports: [ProjetoModule],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports:[UsuarioService],
})
export class UsuarioModule {}
