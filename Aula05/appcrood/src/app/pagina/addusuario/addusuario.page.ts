import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Usuario, UsuarioService } from 'src/app/servico/usuario.service';

@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.page.html',
  styleUrls: ['./addusuario.page.scss'],
})
export class AddusuarioPage implements OnInit {

  //o input abaixo recebe a interface usuário
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


  constructor(private modalCtrl: ModalController, private service: UsuarioService,
    private toastCtrl: ToastController) { }

  ngOnInit() {

    // Testar no inicio pelo console se os dados passaram
    //console.log("entrou");
    //console.log(this.u);
    if (this.u) {
      this.atualizar = true;
      this.dados = this.u;
    }

  }



  async enviando(form: NgForm) {
    //console.log(form.value); // pegar a informação e enviar no console
    const usuario = form.value;

    if (!usuario.nome ||
      !usuario.email ||
      !usuario.cpf ||
      !usuario.senha ||
      !usuario.nivel) {
      this.mensagem('Por favor preencha todos os campos');

    }

    /*  Geito maior de digitar

    else if (this.dados.email === '' || this.dados.email === null) {
      this.mensagem('preencha o email');
    } else if (this.dados.cpf === '' || this.dados.cpf === null) {
      this.mensagem('preencha o cpf');
    } else if (this.dados.senha === '' || this.dados.senha === null) {
      this.mensagem('preencha a senha');
    } else if (this.dados.nivel === '' || this.dados.nivel === null) {
      this.mensagem('preencha o nível');
    }
    */
    else if (this.atualizar) {
      this.service.update(usuario, this.u.id).subscribe(response => {
        // fechar o modal
        this.modalCtrl.dismiss(response);
      })
    }
    else {
      const emailExist = await this.service.getEmail(usuario.email).toPromise();
      if (emailExist) {
        this.mensagem('Este email já existe.');
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
