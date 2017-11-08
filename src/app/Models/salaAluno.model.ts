import { Funcionario } from '../Models/funcionario.model';
import { Turma } from '../Models/turma.model';

export class SalaAluno {
    constructor(public funcionario: Funcionario,
        public turma: Turma) {
    }
}