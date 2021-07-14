import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages = [
    {
      user: 'Cliente',
      data: 1554090856000,
      msg: 'Olá, gostaria de contratar o seu serviço'
    },/*
    {
      user: 'Usuário',
      data:  1554090856000,
      msg: 'Olá, para quando voce gostaria'
    },
    {
      user: 'Cliente',
      data:  1554090856000,
      msg: 'Para amanhã as 8 horas, seria possível?'
    },
    {
      user: 'Usuário',
      data:  1554090856000,
      msg: 'Seria sim, qual o endereço'
    },
    {
      user: 'Cliente',
      data:  1554090856000,
      msg: 'Rua Brasil 123'
    },
    {
      user: 'Usuário',
      data:  1554090856000,
      msg: 'Ok, ate amanhã'
    },*/
  ];

  currentUser = 'Usuário';
  novamsg = '';


  //@ViewChild(IonContent) content: IonContent

  constructor() { }

  sendMessage(){
    this.messages.push({
      user: 'Usuário',
      data: new Date().getTime(),
      msg: this.novamsg
    });
  }

   /*this.novamsg = '';
    setTimeout(() => {
        this.content.scrollToBottom(200);
    });
  }*/

  ngOnInit() {
  }
}
