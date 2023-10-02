import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Produto{
  codigo: string;
  descricao: string;
  quantidade: string;
  valor: string;
  serie: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private url='http://localhost/api/produto';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Produto]>(this.url);
  }

  remove(codigo:any) {
    return this.http.delete(this.url + '/' + codigo);
  }

  create(produto: Produto){
    return this.http.post(this.url, produto);
  }

  update(produto: Produto, codigo: any){
    return this.http.put(this.url + '/' +codigo, produto);
  }

  //método para buscar a serie
  getSerie(serie: any) {
    return this.http.get(this.url + '/' + serie);
  }
  
}