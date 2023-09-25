import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Produto {

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

  private url = 'http://localhost/api/produtos'
  constructor(private http:HttpClient) { }

  all() {
    return this.http.get<[Produto]>(this.url);
  }

  remover(codigo: any) {
    return this.http.delete(this.url + '/' + codigo);
  }

  create(produto: Produto) {
     return this.http.post(this.url, produto);
  }

  update(produto: Produto, id:any){
    return this.http.put(this.url + '/' + id, produto);
  }

  getSerie(serie: any) {
    return this.http.delete(this.url + '/' + serie);
  }
  

}
