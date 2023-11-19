import { Projeto } from "src/projeto/entities/projeto.entity";

export class Usuario {
    id: number;
    nome:string;
    senha: string;
    projetos: Projeto[];

}
