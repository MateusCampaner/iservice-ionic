import { Component } from '@angular/core';
import _ from 'lodash';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tab2page:Tab2Page;

  servicos = ['Encanador','Pedreiro','Eletricista','Pintor','Mecanico','Jardineiro', 'Manicure'];
  buscar: any;
  queryText: string;

  public getServicos(){
    return this.servicos;
  }

  public add(inputTexto){
    this.servicos.push(inputTexto);
  }

  public removeServico(valor){
    this.servicos.splice(valor,1);
  }

  constructor() {
    this.queryText= '';
    //this.servicos = ['Encanador','Pedreiro','Eletricista','Pintor','Mecanico','Jardineiro', 'Manicure'];  

    this.buscar = this.servicos;
  }

  

  pesquisarServicos(ser: any){
    let val = ser.target.value;

    if(val && val.trim() != ''){
      this.servicos = _.values(this.buscar);

      this.servicos = this.servicos.filter((servico) => (servico.toLowerCase().indexOf(val.toLowerCase()) > -1));
    } else {
      this.servicos = this.buscar;
    }
  }

/*
  public addServicos(valor){
    this.servicos.push(valor);
  }
*/

  hide=[false, false, false, false];

  esconder(id){
    this.hide[id]=!this.hide[id];
  }

  

}





 