import { Injectable } from '@nestjs/common';
import { TarefaService } from 'src/tarefa/tarefa.service';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { Projeto } from './entities/projeto.entity';


@Injectable()
export class ProjetoService {
  private projetos : Projeto[] = [];
  private lastId : number = 0;

  constructor(private tarefaService: TarefaService){
  }

  create(createProjetoDto: CreateProjetoDto) {
    let nP = new Projeto();
    this.lastId++;

    nP.id = this.lastId;
    nP.nome = createProjetoDto.nome;
    nP.anoExecucao = createProjetoDto.anoExecucao;
    nP.estadoProjeto = createProjetoDto.estadoProjeto;
    
    // para cada id de tarefas passado no DTO, busca a tarefa correspondente
    nP.tarefas = createProjetoDto.tarefas.map(id => this.tarefaService.findOne(id));

    this.projetos.push(nP);
    console.log("Novo projeto: " + nP.nome);

    return 'This action adds a new projeto';
  }

  findAll() {
    console.log(this.projetos);
    return this.projetos;
  }

  findOne(id: number) {
    let p = this.projetos.find(p => p.id === id);
    return p;
  }

  update(id: number, updateProjetoDto: UpdateProjetoDto) {
    let p = this.projetos.find(p => p.id === id);
    if(updateProjetoDto.nome != undefined)
    {
      p.nome = updateProjetoDto.nome;
    }
    if(updateProjetoDto.anoExecucao != undefined)
    {
      p.anoExecucao = updateProjetoDto.anoExecucao;
    }
    if(updateProjetoDto.estadoProjeto != undefined)
    {
      p.estadoProjeto = updateProjetoDto.estadoProjeto;
    }
    if(updateProjetoDto.tarefas != undefined)
    {
      p.tarefas = updateProjetoDto.tarefas.map(id => this.tarefaService.findOne(id));
    }
    return `This action updates a #${id} projeto`;
  }

  remove(id: number) {
    this.projetos = this.projetos.filter(p => p.id !== id);
    return `This action removes a #${id} projeto`;
  }

  removeAll(){
    while(this.projetos.length){
      this.projetos.pop();
    }
    return console.log("All Projetos has been removed");
  }
}
