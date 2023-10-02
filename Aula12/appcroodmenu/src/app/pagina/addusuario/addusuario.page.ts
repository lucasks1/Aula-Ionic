import { UsuariosService } from './../../servico/usuarios.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { Usuario } from 'src/app/servico/usuarios.service';

@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.page.html',
  styleUrls: ['./addusuario.page.scss'],
})
export class AddusuarioPage implements OnInit {

  @Input() u!: Usuario;
  // variável para servir como um flag de atualização
  atualizar = false;
  // definindo variavel dados
  dados = {
    nome: '',
    email: '',
    cpf: '',
    senha: '',
    nivel: '',
  }


  constructor(private modalCtrl: ModalController,
    private service: UsuariosService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {

    if (this.u) {
      this.atualizar = true;
      this.dados = this.u;
    }

  }

  // Mudança no enviando, tornando como assincrono

  async enviando(form: NgForm) {
    //console.log(form.value);
    const usuario = form.value;
    if (!usuario.nome ||
      !usuario.email ||
      !usuario.cpf ||
      !usuario.senha ||
      !usuario.nivel) {

      this.mensagem('Por favor, preencha todos os campos.');
      return;
    }

    if (this.atualizar) {
      this.service.update(usuario, this.u.id).subscribe(
        (response) => {
          this.modalCtrl.dismiss(response);
        },
        (error) => {
          this.mensagem('Erro ao atualizar usuário.');
          console.error(error);
        }
      );
    } else {
      const emailExist = await firstValueFrom(this.service.getBuscaEmail(usuario.email));
      const cpfExist = await firstValueFrom(this.service.getBuscaCpf(usuario.cpf));
      if (emailExist) {
        this.mensagem('Este email já existe.');

      } else if (cpfExist) {
        this.mensagem('Este cpf já existe.');
      }
      else {
        this.service.create(usuario).subscribe(response => {
          // fechar o modal
          this.modalCtrl.dismiss(response);
        })
      }
    }
  }



  fecharModal() {
    this.modalCtrl.dismiss();
  }

  mensagem(msg: string) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => {
      toast.present();
    })
  }

}