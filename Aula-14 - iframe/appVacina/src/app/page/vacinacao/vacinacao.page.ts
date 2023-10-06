import { Component, OnInit } from '@angular/core';
//importar classe e roteador de página
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vacinacao',
  templateUrl: './vacinacao.page.html',
  styleUrls: ['./vacinacao.page.scss'],
})
export class VacinacaoPage implements OnInit {

   //Criação de variável para a url
   url: any;
   //definindo uma variável no construtor
   constructor(private domSanitize: DomSanitizer, private navCtrl: NavController) { }
 
   ngOnInit() {
     //definimos a abertura de página no OnInit porque ela é a inicialização da página
     this.url =
       this.domSanitize.bypassSecurityTrustResourceUrl('https://www.novaiguacu.rj.gov.br/semus/vacinacao-covid/calendario/');
  
     }
 
   //programação da voltar
   voltar(){
     this.navCtrl.navigateForward('home');
   }
 

}
