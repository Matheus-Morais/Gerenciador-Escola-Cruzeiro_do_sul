import { Component, OnInit, Input } from '@angular/core';
import {Funcionario} from './models/funcionario.model'
import '../assets/css/style.css';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    funcionarios= [];
    editando = false;
    ultimo_id = 5;
    novo =  new Funcionario('','','','','',null)
    novo_func: Funcionario

    constructor() {
        this.title = 'Aplicativo Web';
    }

    ngOnInit(): void {
    }


    cadastrar(func: Funcionario): void {
       
        if (!this.editando) {
            
            const novoId: number = ++this.ultimo_id;
            console.log(novoId)
            this.funcionarios.push(new Funcionario(novoId.toString(), func.nome, func.telefone, func.endereco,func.cep, func.tipoFuncionario));
            this.novo = new Funcionario('','','','','',null);
        } else {
            this.novo = new Funcionario('','','','','',null);
            this.editando = false;
        }
}

}
