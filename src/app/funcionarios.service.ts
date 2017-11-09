import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import {Funcionario} from './Models/funcionario.model'
import'rxjs/add/operator/map'
import'rxjs/add/operator/switchMap'

@Injectable()
export class FuncionariosService {
   
  constructor(private http: HttpClient) { 

  }

  getFuncionarios(): Observable<Funcionario[]>{
    console.log(this.http.get<Funcionario[]>('../assets/dados/funcionarios.json'))
    return this.http.get<Funcionario[]>('../assets/dados/funcionarios.json');
    
  }

}
