export class MessageModel{
    fecha: string;
    imagen: string;
    inmueble: string;
    mensaje: string;
    nombre: string;
    rolUsuario: string;
    myMsg: boolean;
};

export class newMessageModel {
    criticidad: number;
    fechaMensaje: string;
    idCategoria: number;
    idUsuarioEnvio: string;
    isDelete: boolean;
    mensaje: string;
    nombreCategoria: string;
    nombreUsuario: string;
    rolUsuario: string;
}

export class CreateChatModel {
    establshmentId: string;
    userId: string;
    userName: string;
    userProperty: string;
}