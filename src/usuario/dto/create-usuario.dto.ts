import { ApiProperty } from '@nestjs/swagger/dist';
import { IsInt, IsString } from 'class-validator';
export class CreateUsuarioDto {
    
    @IsString()
    @ApiProperty()
    nome:string;
    @IsString()
    @ApiProperty()
    senha: string;

}
