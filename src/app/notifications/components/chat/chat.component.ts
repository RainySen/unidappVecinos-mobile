import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageModel } from 'src/utils/models/Messages.model';
import { NotificationChatService } from '../../services/notification-chat.service';
import { Storage } from '@ionic/storage';
import { IonContent, MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  messages: Array<MessageModel> = new Array();
  newMsg: string;
  keys = new Array();
  removeMyMsg = new Array();

  constructor(
    private chatService: NotificationChatService, private storage: Storage,
    private menuCrtl: MenuController, private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.getAllMsg();
    this.getAllMsg2();
  }

  toggleMenu() {
    this.menuCrtl.toggle();
  }

  async getAllMsg() {
    const ESTABLISHMENT_ID = await this.storage.get('establishmentId');
    const USER_ID = await this.storage.get('userId');
    (await this.chatService.getAllMsg(ESTABLISHMENT_ID, USER_ID)).subscribe(
      (message: Array<MessageModel>) => {
        this.messages = message;
        console.log('messages',message);

          for (let m in this.messages) {
          if ( 'Vecino' === this.messages[m].rolUsuario ) {
            // ------ si el rol que envio el mensaje pertenece al del usuario vecino, entonces la propiedad
            // ------ myMsg queda en true
            this.messages[m].myMsg = true;
          }
        }
        setTimeout(()=>{
          this.scrollDown();
        }, 100);
      }
    )
  }

  // ------ Este metodo se usa para poder borrar los mensajes -----
  async getAllMsg2() {
    const ESTABLISHMENT_ID = await this.storage.get('establishmentId');
    const USER_ID = await this.storage.get('userId');
    (await this.chatService.getListChat(ESTABLISHMENT_ID, USER_ID).then(res => {
      res.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          this.keys = Object.keys(data)
          this.removeMyMsg =  Object.values(data);
        }
      });
    }))
  }

  sendMessage() {
    // ------ Si el listado de mensajes esta en 0, entonces se crea la conversación con el portero, en caso de que no;
    // ------ se responde la conversación al portero
    if (this.messages.length == 0 ) {
      this.chatService.newChat(this.newMsg);
    } else {
      this.chatService.sendMessage(this.newMsg);
    }
    this.newMsg = '';
    this.scrollDown();
  }

  async removeMsg(item) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      message: '<strong>¿Deseas eliminar este mensaje?</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
            this.chatService.updateMessage(this.keys[item], this.removeMyMsg[item]);
          }
        }
      ]
    });

    await alert.present();
  }


  deleteMessage() {
    this.chatService.deleMessage();
  }

  scrollDown() {
    this.content.scrollToBottom()
  }

}
