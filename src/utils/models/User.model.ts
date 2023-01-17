export class CredentialsModel {
    username: string;
    password: string;
}

export class loginResponseModel {
    user: UserModel;
    token: string;
}

export class UserModel {
    created_at: string;
    email: string;
    estado: string;
    id_rol: string;
    nombre: string;
    password: string;
    updated_at: string;
    _id: string;
}