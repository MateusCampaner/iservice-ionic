import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(nome, senha, servico, ) {
    this.nome = nome;
    this.senha = senha;
    this.servico = servico;
   };
   
}
