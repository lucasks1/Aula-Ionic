import { Injectable } from '@angular/core';
// importação da classe HttpClient
import { HttpClient } from '@angular/common/http';

// Criação de uma interface para o usuário
export interface Usuario {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  senha: string;
  nivel: string;
}



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
 // definição do caminho de acesso
 private url = 'http://localhost/api/usuario';
 private isAuthenticated = false; // Variável para controlar o estado de autenticação

 

 constructor(private http:HttpClient) { }
 getAll(){
   return this.http.get<[Usuario]>(this.url);
 }

 remove(id: any){
   return this.http.delete(this.url +'/'+ id);
 }

 create(usuario: Usuario){
   return this.http.post(this.url, usuario);
 }

 update(usuario: Usuario, id: any){
   return this.http.put(this.url + '/' + id, usuario);
 }

 getBuscaEmail(email: any){
   return this.http.get(this.url + '/' +email);
 }

 getBuscaCpf(cpf: any){
   return this.http.get(this.url + '/' +cpf);
 }
 getLogin(email:any, senha:any){
  return this.http.get(this.url + '/' + email + '/' + senha);
 }

}
