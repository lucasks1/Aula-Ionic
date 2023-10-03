import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export interface Receita{
  id:null | string;
  descricao:string;
  categoria:string;
  ingredientes:string;
  preparo:string;
  cheff:string;
}

@Injectable({
  providedIn: 'root'
})

export class ReceitaService {

  private url = 'http://localhost/cheff/receita'

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Receita]>(this.url); 
  }
  // método para remover usuário
  remove(id:any){
    return this.http.delete(this.url +'/'+id);
  }
  // método para adicionar usuários
  create(receita:Receita ){
    return this.http.post(this.url, receita);
  }
  // método para atualizar usuários
  update(receita: Receita, id: any){
    return this.http.put(this.url + '/' + id, receita);
  }
  getCategoria(categoria:any){
    return this.http.get<[Receita]>(this.url +'/'+categoria);
  }
}
