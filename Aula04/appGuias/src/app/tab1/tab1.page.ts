import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  idade : number = 0;
  num : number = 7;
  total : number = 0;


  constructor() {}

  ngOnInit() {
  }

  enviar(){
    this.total = this.idade * this.num;

  }

  limpar(){
    this.total = 0;
  }
 
  
}

/* 3 funções:
.parseInt(string) => converte string em int.
.parseFloat(string) => converte valor em float.
.String(num) => converte valor em String.
         |
   toast => message: "msg"
   Alert              String(var) */