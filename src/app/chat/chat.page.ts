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
      createdAt: 155409156000,
      msg: 'teste'
    },
    {
      user: 'Usuário',
      createdAt: 155409156000,
      msg: 'teste'
    }
  ];

  currentUser = 'Usuário';
  novamsg = '';

  //@ViewChild(IonContent) content: IonContent

  constructor() { }

  sendMessage(){
    this.messages.push({
      user: 'Usuário',
      createdAt: new Date().getTime(),
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
