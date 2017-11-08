import { TipoFuncionario } from '../Models/tipoFuncionario.model';

export class Funcionario {
    constructor(public codigo: number,
        public nome: string,
        public telefone: string = null,
        public endereco: string = null,
        public cep: string = null,
        public tipoFuncionario: TipoFuncionario
        ) {
    }
}
