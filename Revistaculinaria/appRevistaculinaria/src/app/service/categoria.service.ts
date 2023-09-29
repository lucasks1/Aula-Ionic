import { Injectable } from '@angular/core';

export interface Receita{
  id:string;
  descricao:string;
  categoria:string;
  ingredientes:string;
  preparo:string;
  cheff:string;
}


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url = 'http://localhost/api/categoria'
  constructor() { }

  

 
}
