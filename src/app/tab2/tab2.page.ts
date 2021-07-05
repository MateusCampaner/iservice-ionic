import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';


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
