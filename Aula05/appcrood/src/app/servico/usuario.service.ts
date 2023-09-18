import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//criação de uma interface com o usuario
export interface Usuario {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  nivel: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // Defiição doa url do api
  private url = 'http://localhost/api/usuario'
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<[Usuario]>(this.url);
  }
}
