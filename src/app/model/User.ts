export class User {
    nome:string;
    username:string;
    password:string;
    admin:boolean;

    constructor(nome:string, username: string, password: string, admin: boolean) {
        this.nome = nome;
        this.username = username;
        this.password = password;
        this.admin = admin;
    }
}