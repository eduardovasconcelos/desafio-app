export class Post {
    id:string;
    titulo:string;
    link:string;
    texto:string;    
    dono:string;
    imagem:any;

    comentarios:any;

    constructor(id:string, titulo:string, link:string, texto:string, 
        dono:string, imagem:any, comentarios:any) {
        
            this.id = id;
        this.titulo = titulo; 
        this.link = link;
        this.dono = dono;
        this.texto = texto;
        this.imagem = imagem;
        this.comentarios = comentarios;
    }
}