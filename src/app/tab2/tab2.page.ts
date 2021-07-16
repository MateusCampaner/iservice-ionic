import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DadosService } from '../funcoes/dados.service';

import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  inputTexto = "";
  inputDesc = "";
  marcacaoRadio = "";

  //lista = ["Pintor", "Pedreiro", "Encanador", "Eletricista"];
  //servicos = ['Encanador','Pedreiro','Eletricista','Pintor','Mecanico','Jardineiro', 'Manicure'];

  limpar(){
    this.inputTexto = "";
    this.inputDesc = "";
    this.marcacaoRadio = ""; 
  }

  //Alerta 

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Serviço publicado com sucesso!',
      message: 'Você pode ver mais detalhes no seu perfil.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  //teste dados service
  @ViewChild('input') meuInput;
   minhaLista = ["Batata", "Cebola", "Tomate"];

  adiciona() {
    this.minhaLista.push(this.meuInput);
    this.meuInput="";
    //this.meuInput.setFocus();
  }

  remover(indice) {
    this.minhaLista.splice(indice,1);
  }

  getLista(){
    return this.minhaLista;
  }

  

  // Tab1 usar
  /*/
  tab1page:Tab1Page;

  addServicoArray(){
    this.tab1page.getServicos();
  }

  //DadosService usar
/*
  dadosService:DadosService;

  criarServico(){
    this.dadosService.add(this.dadosService.getServicos());
  }*/


/*
  public getServicos(){
    return this.servicos;
  }

  public addServicos(valor){
    this.servicos.push(valor);
  }

  public removeServico(valor){
    this.servicos.splice(valor,1);
  }
  */
}


/*
import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  inputTexto = "";
  marcacaoRadio = "";

  Limpar(){
    this.inputTexto = "";
    this.marcacaoRadio = ""; 
  }

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Serviço publicado com sucesso!',
      message: 'Você pode ver mais detalhes no seu perfil.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
export class Tab1page {
  servicos = ['Encanador','Pedreiro','Eletricista','Pintor','Mecanico','Jardineiro', 'Manicure'];

  public addServicos(valor){
    this.servicos.push(valor);
  }

  public getServicos(){
    return this.servicos;
  }
}
*/