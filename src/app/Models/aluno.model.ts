import { Turma } from '../Models/turma.model';

export class Aluno {
    constructor(public codigo: number, 
        public nome: string,
        public telefone: string,
        public matricula: Turma) {}
}
