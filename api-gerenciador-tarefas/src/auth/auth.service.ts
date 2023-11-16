import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {

   constructor(private userService: UsuarioService, private jwtService: JwtService){}

  async signIn(username: string, password:string) 
  {
    const usuario = await this.userService.findByName(username);
    console.log(usuario.nome + "|" + usuario.senha);
    if(usuario.senha !== password){
      throw new UnauthorizedException();
    }
    const payload = { sub: usuario.id, username: usuario.nome };
    console.log("Login master Validado");
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }

 
}
