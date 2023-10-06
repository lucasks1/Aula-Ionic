import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-outras',
  templateUrl: './outras.page.html',
  styleUrls: ['./outras.page.scss'],
})
export class OutrasPage implements OnInit {

    //Criação de variável para a url
    url: any;
    //definindo uma variável no construtor
    constructor(private domSanitize: DomSanitizer, private navCtrl: NavController) { }
  
    ngOnInit() {
      //definimos a abertura de página no OnInit porque ela é a inicialização da página
      this.url =
        this.domSanitize.bypassSecurityTrustResourceUrl('https://www.novaiguacu.rj.gov.br/semus/gripe/');
   
      }
  
    //programação da voltar
    voltar(){
      this.navCtrl.navigateForward('home');
    }
 

}
