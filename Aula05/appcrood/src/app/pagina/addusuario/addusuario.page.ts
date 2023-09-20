import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
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


  constructor(private modalCtrl: ModalController, private service: UsuarioService) { }

  ngOnInit() {

    // Testar no inicio pelo console se os dados passaram
    //console.log("entrou");
    //console.log(this.u);
    if (this.u) {
      this.atualizar = true;
      this.dados = this.u;
    }

  }

  enviando(form: NgForm) {
    //console.log(form.value); // pegar a informação e enviar no console
    const usuario = form.value;
    if (this.atualizar) {
      this.service.update(usuario, this.u.id).subscribe(response => {
        // fechar o modal
        this.modalCtrl.dismiss(response);
      })
    } else {
      this.service.create(usuario).subscribe(response => {
        // fechar o modal
        this.modalCtrl.dismiss(response);
      })
    }
  }


  fecharModal() {
    this.modalCtrl.dismiss();
  }
}
