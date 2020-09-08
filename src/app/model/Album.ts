export class Album {
    id:string;
    nome:string;
    arquivos:FormData;
    dono:string;

    constructor(id, nome, arquivos, dono) {
        this.id = id;
        this.nome = nome; 
        this.arquivos = arquivos;
        this.dono = dono;
    }
}