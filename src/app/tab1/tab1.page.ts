import { Component } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  servicos = [];
  buscar: any;
  queryText: string;

  constructor() {
    this.queryText= '';
    this.servicos = ['Encanador','Pedreiro','Eletricista','Pintor','Mecanico','Jardineiro'];  
    
    this.buscar = this.servicos;
  }

  pesquisarServicos(ser: any){
    const val = ser.target.value;
    if(val && val.trim() !== ''){
      this.servicos = _.values(this.buscar);

      this.servicos = this.servicos.filter((servico) => (servico.toLowerCase().indexOf(val.toLoweCase()) > -1));
    } else {
      this.servicos = this.buscar;
    }
  }
  hide=[false, false, false, false];

  esconder(id){
    this.hide[id]=!this.hide[id];
  }
}


