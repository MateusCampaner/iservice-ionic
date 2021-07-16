import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  servicos = ['Encanador','Pedreiro','Eletricista','Pintor','Mecanico','Jardineiro', 'Manicure'];

  constructor() {}

  hide=[false, false, false, false];

  esconder(id){
    this.hide[id]=!this.hide[id];
  }

}
