import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.page.html',
  styleUrls: ['./descricao.page.scss'],
})
export class DescricaoPage implements OnInit {

  @Input() d!: DescricaoPage;

  dados = {
    descricao: '',
    categoria: '',
    ingredientes: '',
    preparo:'',
    cheff:'',
  }

  constructor() { }

  ngOnInit() {
  }

  

}
