import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as _moment from 'moment';
import { newMessageModel } from 'src/utils/models/Messages.model';
import { Storage } from '@ionic/storage';
import { CreateChatModel } from '../../../utils/models/Messages.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationChatService {

  moment = _moment;
  message: newMessageModel = new newMessageModel();
  createChat: CreateChatModel = new CreateChatModel();
  request: AngularFireList<any>;

  constructor(
    private dbFirebase: AngularFireDatabase, private storage: Storage
  ) { }

  async getAllMsg(establishmentId, userId): Promise<Observable<any[]>> {
    this.createChat.establshmentId = await this.storage.get('establishmentId');
    this.createChat.userId = await this.storage.get('userId');
    this.createChat.userName = await this.storage.get('userName');
    this.createChat.userProperty = await this.storage.get('neighbourProperty');
    const REQUEST = this.dbFirebase.list('/message/' + establishmentId + '/' + userId + '/' + 'conversacion');
    const Rest = this.dbFirebase.database.ref('/message/' + establishmentId + '/' + userId + '/' + 'conversacion').get();
    return REQUEST.valueChanges();
  }

  async getListChat(establishmentId, userId) {
    let starCountRef = this.dbFirebase.database.ref('/message/' + establishmentId + '/' + userId + '/' + 'conversacion');
    // starCountRef.on('value', (snapshot) => {
    //   const data = snapshot.val();
    //   console.log('das', data);
    // });
    return starCountRef;
  }

  sendMessage(message) {
    this.message.criticidad = 0;
    this.message.fechaMensaje = this.moment().format('DD/MM/YYYY HH:mm');
    this.message.idCategoria = 0;
    this.message.idUsuarioEnvio = this.createChat.userId;
    this.message.isDelete = false;
    this.message.mensaje = message;
    this.message.nombreCategoria = "";
    this.message.nombreUsuario = this.createChat.userName;
    this.message.rolUsuario = 'Vecino';
    this.dbFirebase.list('/message/' + this.createChat.establshmentId + '/' + this.createChat.userId + '/' + 'conversacion').push(this.message);
  }

  newChat(message) {
    this.dbFirebase.database.ref('/message/' + this.createChat.establshmentId + '/' + this.createChat.userId).set({
      idUsuario: this.createChat.userId,
      nombreUsuario: this.createChat.userName,
      numeroInmueble: this.createChat.userProperty,
      fotoPerfil: 'https://i.pinimg.com/originals/7e/bc/88/7ebc888a34305274628610bf02137aaa.png'
    }, error => {
      if (error) {
        // The write failed...
        console.error('problemas al iniciar el chat');
      } else {
        // Data saved successfully!
        this.sendMessage(message);
      }
    });
  }

  deleMessage() {
    this.dbFirebase.list('/message/' + this.createChat.establshmentId + '/' + this.createChat.userId + '/' + 'conversacion').remove('-MauuzWjJ_fGnJkg5O4e')
      .then(res => {
      })
  }

  updateMessage(key: string, value: any) {
    this.dbFirebase.list('/message/' + this.createChat.establshmentId + '/' + this.createChat.userId + '/' + 'conversacion')
      .update(key,
        {
          criticidad: value.criticidad,
          fechaMensaje: value.fechaMensaje,
          idCategoria: value.idCategoria,
          idUsuarioEnvio: value.idUsuarioEnvio,
          isDelete: true,
          mensaje: value.mensaje,
          nombreCategoria: value.nombreCategoria,
          nombreUsuario: value.nombreUsuario,
          rolUsuario: value.rolUsuario,
        }).then(res => {
        })
  }

}
