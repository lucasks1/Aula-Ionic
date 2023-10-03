import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
 
    { title: 'Todas as receitas', url: 'receitas', icon: 'paper-plane' },
    { title: 'Cadastrar Admin', url: 'addreceita', icon: 'heart' },
    { title: 'Lanche', url: 'lanche', icon: 'archive' },
    { title: 'Refeiçâo', url: 'refeicao', icon: 'trash' },
    { title: 'Sobremesa', url: 'sobremesa', icon: 'warning' },
    { title: 'Sopa', url: 'sopa', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
