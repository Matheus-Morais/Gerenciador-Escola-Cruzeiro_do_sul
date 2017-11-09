import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {FuncionariosService} from '../funcionarios.service'
import {Funcionario} from '../Models/funcionario.model'
@Component({
  selector: 'app-lista-de-funcionarios',
  templateUrl: './lista-de-funcionarios.component.html',
  styleUrls: ['./lista-de-funcionarios.component.css']
})
export class ListaDeFuncionariosComponent implements OnInit {
  funcionarios = [];



  constructor(private funcionariosService: FuncionariosService) { 
  }

  ngOnInit() {
    this.funcionariosService.getFuncionarios()
      .subscribe(funcionarios => this.funcionarios = funcionarios)
  }


  excluir(funcionario: Funcionario): void {
    this.funcionarios.splice(this.funcionarios.indexOf(funcionario), 1);
}


}

