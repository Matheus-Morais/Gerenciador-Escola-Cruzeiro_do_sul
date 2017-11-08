import { Turma } from '../Models/turma.model';
import { Disciplina } from '../Models/disciplina.model';

export class DisciplinaTurma {
    constructor(public disciplina: Disciplina,
        public turma: Turma) {
    }
}