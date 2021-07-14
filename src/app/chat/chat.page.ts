import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages = [
    {
      user: 'jao',
      createdAt: '',
      msg: 'teste'
    },
    {
      user: 'Usuário',
      createdAt: '',
      msg: 'teste'
    }
  ];

  currentUser = 'Usuário';
  novamsg = '';

  constructor() { }

  /*sendMessage(){
    this.messages.push({
      user: 'Usuário',
      createdAt: new Date().getTime(),
      msg: this.novamsg
    });

    this.novamsg = '';
  }*/

  ngOnInit() {
  }

}
