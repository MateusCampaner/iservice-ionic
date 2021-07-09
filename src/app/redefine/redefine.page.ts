import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-redefine',
  templateUrl: './redefine.page.html',
  styleUrls: ['./redefine.page.scss'],
})
export class RedefinePage implements OnInit {

  constructor(public alertController: AlertController) {}

  async alerta() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Solicitação Enviada',
      message: 'Se dirija ao seu email de cadastro para confirmar a mudança da senha.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  ngOnInit() {
  }

}