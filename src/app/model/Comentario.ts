export class Comentario {
    id:string;
    conteudo:string;
    idPost:string;
    dono:string;

    constructor(conteudo:string, idPost:string, dono:string, id:string) {
        this.conteudo = conteudo;
        this.idPost = idPost;
        this.dono = dono;
        this.id = id;
    }
}