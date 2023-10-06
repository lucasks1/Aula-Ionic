import { Component, OnInit } from '@angular/core';
//importar classe e roteador de página
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
//----------------------
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {
  //Criação de variável para a url
  url: any;
  //definindo uma variável no construtor
  constructor(private domSanitize: DomSanitizer, private navCtrl: NavController) { }

  ngOnInit() {
    //definimos a abertura de página no OnInit porque ela é a inicialização da página
    this.url =
      this.domSanitize.bypassSecurityTrustResourceUrl(' https://covid.saude.gov.br/');
 
    }

  //programação da voltar
  voltar(){
    this.navCtrl.navigateForward('home');
  }

}