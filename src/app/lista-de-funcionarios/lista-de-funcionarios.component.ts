import { Component, OnInit } from '@angular/core';
import {FuncionariosService} from '../funcionarios.service'
@Component({
  selector: 'app-lista-de-funcionarios',
  templateUrl: './lista-de-funcionarios.component.html',
  styleUrls: ['./lista-de-funcionarios.component.css']
})
export class ListaDeFuncionariosComponent implements OnInit {
  funcionarios = [];

  constructor(private funcionariosService: FuncionariosService) { }

  ngOnInit() {
    this.funcionariosService.getFuncionarios()
      .subscribe(funcionarios => this.funcionarios = funcionarios)
  }

}
