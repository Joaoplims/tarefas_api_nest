import { Injectable } from '@nestjs/common';
import { ProjetoService } from 'src/projeto/projeto.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios : Usuario[] = []
  private lastId : number = 0;

  constructor(private projetoService : ProjetoService){
      let master = new Usuario();
      master.id = 1;
      master.nome = 'admin';
      master.senha = 'admin'
      this.usuarios.push(master);
      console.log(">>> Usuario Master adicionado");
     
  }

  create(createUsuarioDto: CreateUsuarioDto) {
    let u = new Usuario();
    this.lastId++;

    u.nome = createUsuarioDto.nome;
    u.senha = createUsuarioDto.senha;
    u.id = this.lastId;
    this.usuarios.push(u);
    return 'This action adds a new usuario';
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id: number) {
    return this.usuarios.find(u => u.id === id );
  }
 findByName(username : string){
    return this.usuarios.find(n => n.nome === username);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    let u = this.usuarios.find(u => u.id === id );
    if(updateUsuarioDto.nome !== undefined){
    u.nome = updateUsuarioDto.nome;
    }
    // para cada id de tarefas passado no DTO, busca a tarefa correspondente
    u.projetos = updateUsuarioDto.projetos.map(id => this.projetoService.findOne(id));
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    this.usuarios = this.usuarios.filter(p => p.id !== id);
    return `This action removes a #${id} usuario`;
  }
}
