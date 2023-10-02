import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Usuários', url: 'usuarios', icon: 'accessibility' },
    { title: 'Produtos', url: 'produtos', icon: 'accessibility' },
    { title: 'login', url: 'login', icon: 'accessibility' },


  ];
  public labels = ['Versão 1.0', 'Senac - NIG', 'Tecnologia da Informação'];
  constructor() {}
}
