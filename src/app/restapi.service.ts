import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/User';
import { Album } from './model/Album';
import { JwtResponse } from './model/JwtResponse';
import { Post } from './model/Post';
import { Comentario } from './model/Comentario';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  })
};

const httpOptionsFiles = {
  headers: new HttpHeaders({ 
    'Content-Type': 'multipart/form-data',
    'Accept': 'multipart/form-data'
  })
};


@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  private baseUrl = 'http://localhost:8080/api/';
  private loginUrl = this.baseUrl + 'auth/login';  
  private usuarioUrl = this.baseUrl + 'auth/registra';
  private usuariosUrl = this.baseUrl + 'usuarios';
  private postUrl = this.baseUrl + 'post';
  private albumUrl = this.baseUrl + 'album';
  private comentarioURL = this.baseUrl + 'comentario';
  

  constructor(private http:HttpClient) { }

  public login(username:string, password:string): Observable<JwtResponse> {          
    return this.http.post<JwtResponse>(this.loginUrl, {'username':username, 'password':password}, httpOptions);
  }

  public addUser(user: User) {      
    return this.http.post<any>(this.usuarioUrl, user, httpOptions);
  }

  public addAlbum(nome:string, formData: FormData) {      
    return this.http.post<any>(this.albumUrl + "?nome=" + nome, formData);
  }

  public addComentario(comentario:Comentario) {      
    return this.http.post<any>(this.comentarioURL, comentario);
  }

  public addPost(form:any, formData: FormData) {   
    let url = "?titulo=" + form.titulo + "&link=" + form.link;
    formData.append("texto", form.texto);    
              
    return this.http.post<any>(this.postUrl + url, formData);
  }

  public getAlbums(): Observable<any> {      
    return this.http.get(this.albumUrl +"s");
  }

  public getUsers(): Observable<User[]> {      
    return this.http.get<User[]>(this.usuariosUrl);
  }

  public getPosts(): Observable<Post[]> {      
    return this.http.get<Post[]>(this.postUrl +"s");
  }

  public getPostsPesquisa(filtro:string): Observable<Post[]> {      
    return this.http.get<Post[]>(this.postUrl + "sPesquisa?filtro=" + filtro);
  }

  public getAlbum(id:string) {
    return this.http.get<any>(this.albumUrl + "/" + id);
  }

  public getPost(id:string): Observable<Post> {
    return this.http.get<Post>(this.postUrl + "/" + id);
  }

  public deleteAlbum(id:string) {
    return this.http.delete<any>(this.albumUrl + "/" + id);
  }

  public deletePost(id:string) {
    return this.http.delete<any>(this.postUrl + "/" + id);
  }

  public deleteComentario(id:string) {
    return this.http.delete<any>(this.comentarioURL + "/" + id);
  }
}
