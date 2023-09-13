import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  idade: string = "";
  multiplicacao: number = 0;
  total: number = 0;

  constructor() { }



  resultado() {

    this.multiplicacao = Number(this.idade) * 7;

  }
  limpar() {
this.idade = "";  
  } 

}
