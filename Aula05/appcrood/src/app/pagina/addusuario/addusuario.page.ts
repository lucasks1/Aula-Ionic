import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
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


  onlyNumbers: any = new RegExp('^[0-9]+$');

  constructor(private modalCtrl: ModalController, private service: UsuarioService, private toastCtrl: ToastController) { }

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
    let cpfExist;

    if (!usuario.nome ||
      !usuario.email ||
      !usuario.cpf ||
      !usuario.senha ||
      !usuario.nivel) {
      this.mensagem('Por favor preencha todos os campos');

    }




    else if (this.atualizar) {
      this.service.update(usuario, this.u.id).subscribe(response => {
        // fechar o modal
        this.modalCtrl.dismiss(response);
      })
    }else {
      if (this.onlyNumbers.test(usuario.cpf)) {
        /*segunda condiçao sera responsavel por verificar se ja existe
         um cpf igual ao que foi inserido*/
        usuario.cpf = this.getCpfFormated(usuario.cpf);
        cpfExist = await firstValueFrom(this.service.getCPF(usuario.cpf));
        if (cpfExist) {
          // caso de false, a variavel 'msg' receberá um valor e campo será limpo

          this.dados.cpf = '';
          this.mensagem('este cpf ja existe');
        }
      } else {
        // caso de false, a variavel 'msg' receberá um valor e campo será limpo
        this.dados.cpf = '';
        this.mensagem('Somente numeros no campo CPF');
        cpfExist = true;
      }
      const emailExist = await firstValueFrom(this.service.getEmail(usuario.email));
      //const getCPF = await firstValueFrom(this.service.getCPF(usuario.cpf));
      if (emailExist) {
        this.mensagem('Este email já existe.');
      }


      else {
        this.service.create(usuario).subscribe(response => {
          // fechar o modal
          this.modalCtrl.dismiss(response);
        })
        /* else if (getCPF) {
           this.mensagem('Este CPF já existe.');*/
      }

    }
  }




  getCpfFormated(cpf: string): string {
    //array com os cada parte do cpf
    let cpfGroup: Array<string> = [
      `${cpf[0]}${cpf[1]}${cpf[2]}`,
      `${cpf[3]}${cpf[4]}${cpf[5]}`,
      `${cpf[6]}${cpf[7]}${cpf[8]}`,
      `${cpf[9]}${cpf[10]}`
    ];
    //formando o cpf formatado
    let formattedCpf: string = `${cpfGroup[0]}.${cpfGroup[1]}.${cpfGroup[2]}-${cpfGroup[3]}`;
    return formattedCpf;


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








