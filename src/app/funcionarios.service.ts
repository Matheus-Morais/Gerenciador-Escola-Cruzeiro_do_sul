import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import {Funcionario} from './Models/funcionario.model'
import'rxjs/add/operator/map'
import'rxjs/add/operator/switchMap'

@Injectable()
export class FuncionariosService {
  protected funcionarios: Array<Funcionario>;
  
  constructor(private http: HttpClient) { 

  }

  getFuncionarios(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>('../assets/dados/funcionarios.json');
    
  }
 

}
