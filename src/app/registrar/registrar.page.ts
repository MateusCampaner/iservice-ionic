import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { RegistraService } from '../servico/registra.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  @ViewChild('input') meuInput;

  nome='';
  email='';
  senha='';
  confirma='';
  tipoConta;
  telefone='';

  registraService: RegistraService;

  constructor(public alertController: AlertController,
                     private http: HttpClient,
                     public toastController: ToastController) {
      this.registraService = new RegistraService(http);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Perfil criado  com sucesso!',
      message: 'Conecte-se para criar e oferecer serviços!.',
      buttons: ['Voltar','OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async alertaSenha() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Senhas Divergentes',
      message: 'Digite as senhas iguais',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
  }

  cliente(){
    this.tipoConta = 0;
  }

  prestador(){
    this.tipoConta = 1;
  }

  adiciona() {
    if (this.senha == this.confirma){
      this.registraService.adiciona(this.nome, this.email, this.senha, this.telefone, this.tipoConta);
      this.presentAlert();
    } else{
      this.alertaSenha();
    }
  }

}
