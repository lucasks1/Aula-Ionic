import { Component, isStandalone } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class Tab2Page {


  public sorteado = 0;
  public num1 = '';
  public num2 = '';
  public msg = '';
  public adv = '';
  public pontos: any = 0;


  constructor(public toastCtrl: ToastController) { }


  limpar() {
    this.num1 = '';
    this.num2 = '';
    this.sorteado = 0;
  }


  random(): any {
    var a = parseInt(this.num1);
    var b = parseInt(this.num2);
    var c = parseInt(this.adv);
    
    if (String(a) == 'NaN' || String(b) == 'NaN') {
      this.msg = 'É preciso preencher os campos!';
      this.presentToast(this.msg);
    } else {
      if (a > -1 && b < 10000) {
        if (a == b) {
          this.msg = 'Não use números iguais!';
          this.presentToast(this.msg);
          this.num1 = '';
          this.num2 = '';
          this.sorteado = 0;
        }
        else if (a > b) {
          console.log('A é maior que B')
          this.msg = 'Número inicial não deve ser maior que o final!';
          this.presentToast(this.msg);
          this.num1 = '';
          this.num2 = '';
          this.sorteado = 0;
        }
        else {
          var rand = Math.floor(Math.random() * (b - a + 1) + a);
          return this.sorteado = rand;
        }
      } else {
        this.msg = 'Os números devem ser entre 0 e 99999';
        this.presentToast(this.msg);
        this.num1 = '';
        this.num2 = '';
        this.sorteado = 0;
      }
    }
    
  }

 
  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });


    toast.present();
  }


}
if (String(a) == 'NaN' || String(b) == 'NaN' || String(c) == 'NaN' ) {
  this.msg = 'É preciso preencher os campos!';
  this.presentToast(this.msg);
}else{      
  if (a > -1 && b < 10000) {
    if (a == b) {
      this.msg = 'Não use números iguais!';
      this.presentToast(this.msg);
      this.num1 = '';
      this.num2 = '';
      this.sorteado = 0;
    }
    else if (a > b) {
      console.log('A é maior que B')
      this.msg = 'Número inicial não deve ser maior que o final!';
      this.presentToast(this.msg);
      this.num1 = '';
      this.num2 = '';
      this.sorteado = 0;
    }
    else{
      var rand = Math.floor(Math.random()*(b-a+1)+a);
      if (rand == c) {
        this.msg = 'Você Acertou';
        this.presentToast(this.msg);
        this.pontos = 30; //this.pontos + 10;
       
        //updateLocalStorage(){
        //localStorage.setItem('pontuacao',JSON.stringify(this.pontos));
     
       // }
       

      } else {
        this.msg = 'Você Errou';
        this.presentToast(this.msg);
      }
     
      return this.sorteado = rand;
    }
  }else{
    this.msg = 'Os números devem ser entre 0 e 99999';
    this.presentToast(this.msg);
    this.num1 = '';
    this.num2 = '';
    this.sorteado = 0;
  }
}