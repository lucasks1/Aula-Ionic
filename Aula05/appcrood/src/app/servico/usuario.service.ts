import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//criação de uma interface com o usuario
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
export class UsuarioService {

  // Defiição doa url do api
  private url = 'http://localhost/api/usuario'
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[Usuario]>(this.url);

  }

  // metodo para remover usuário
  remove(id: any) {
    return this.http.delete(this.url + '/' + id);
    //  return this.http.delete ('http://localhost/api/api_usuario.php?=id)
  }

  //metodo para adicionar usuários
  create(usuario: Usuario) {
    return this.http.post(this.url, usuario);
  }
  update(usuario: Usuario, id: any){
    return this.http.put(this.url + '/' + id, usuario);
  }

}
