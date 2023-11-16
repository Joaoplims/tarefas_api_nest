import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefaModule } from './tarefa/tarefa.module';
import { ProjetoModule } from './projeto/projeto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [TarefaModule, ProjetoModule, UsuarioModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],


})
export class AppModule {}
