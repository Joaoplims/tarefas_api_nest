import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @IsString()
    @ApiProperty()
    nome: string;
 
    @ApiProperty({
        description: 'Todos os projetos que um usuário pode ter. Para atualizar os projetos, envie um array de numeros. Cada numero representa o ID de um projeto. ',
        type: 'number',
        isArray:true,
        example: "[5,3,7,8,9,1]"
      })
    @IsNumber({}, { each: true })
    projetos : number[];
}
