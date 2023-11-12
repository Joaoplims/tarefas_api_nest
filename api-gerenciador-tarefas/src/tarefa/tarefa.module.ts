import { Module } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { TarefaController } from './tarefa.controller';

@Module({
  controllers: [TarefaController],
  providers: [TarefaService],
  exports: [TarefaService], // Exportando TarefaService

})
export class TarefaModule {}
