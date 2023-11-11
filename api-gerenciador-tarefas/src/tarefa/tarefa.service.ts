import { Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { Tarefa } from './entities/tarefa.entity';

@Injectable()
export class TarefaService {
  private  tarefas: Tarefa[] = [];
  private lastId : number = 0;

  create(createTarefaDto: CreateTarefaDto) 
  {
    let nT = new Tarefa();
    this.lastId++;

    nT.id = this.lastId;
    nT.tituloTarefa = createTarefaDto.tituloTarefa;
    nT.dscTarefa = createTarefaDto.dscTarefa;
    nT.statusConcluido = createTarefaDto.statusConcluido;

    this.tarefas.push(nT);
    console.log("Nova tarefa: " + nT.tituloTarefa);
  }

  findAll() {
    console.log(this.tarefas);
    return this.tarefas;
  }

  findOne(id: number) {
    let t = this.tarefas.find(x => x.id === id );
    return t;
  }

  update(id: number, updateTarefaDto: UpdateTarefaDto) {
    let t = this.tarefas.find(x => x.id === id );

    if(updateTarefaDto.tituloTarefa !== undefined)
    {
      t.tituloTarefa = updateTarefaDto.tituloTarefa;
    }
    if(updateTarefaDto.dscTarefa !== undefined)
    {
      t.dscTarefa = updateTarefaDto.dscTarefa;
    }
    if(updateTarefaDto.statusConcluido !== undefined )
    {
      t.statusConcluido = updateTarefaDto.statusConcluido;
    }
    return `This action updates a #${id} tarefa`;
  }

  remove(id: number) {
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
    return `This action removes a #${id} tarefa`;
  }

  removeAll(){
    while (this.tarefas.length) {
      this.tarefas.pop();
    }
    console.log("All Tarefas has been removed");
  }
}
