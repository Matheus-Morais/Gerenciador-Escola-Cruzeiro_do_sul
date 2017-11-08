import { Turma } from '../Models/turma.model';
import { Aluno } from '../Models/aluno.model';
import { Funcionario } from '../Models/funcionario.model';

export class IndicaTurma {
    constructor(public turma: Turma,
        public aluno: Aluno,
        public funcionario: Funcionario) {
    }
}