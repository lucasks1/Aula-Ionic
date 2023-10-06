import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Imagem{
  id:string;
  nome:string;
  path:string;
  data_upload:string;
}
@Injectable({
  providedIn: 'root'
})
export class ImagemService {

  private url='http://localhost/api/imagem';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Imagem]>(this.url);
  }

}
