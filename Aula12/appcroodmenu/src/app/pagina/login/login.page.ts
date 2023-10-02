import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { UsuariosService } from 'src/app/servico/usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //definindo variavel dados
  dados = {
    email: '',
    senha: ''
  }
  constructor(private toastCtrl: ToastController, private sevvice: UsuariosService, private nevCtrl: NavController) { }

  ngOnInit() {
  }

  async logar(form: NgForm) {
    const usuario = form;
    if (!usuario.email || !usuario.senha) {
      this.mensagem('Por favor, preencha todos os campos');
      return;
    }

    //verificar email se o email e a senha existe existem
    const loginExists = await firstValueFrom(this.sevvice.getLogin(usuario.email, usuario.senha));

    if (loginExists) {
      this.nevCtrl.navigateRoot('produtos');
    } else {
      this.mensagem('login invalido');
    }

    mensagem(texto: String){
      this.toastCtrl.create({
        message:texto,
        duration: 2000,
        color: 'danger'
      }).then(toast => {
        toast.present();
      });
    }
  }
}
