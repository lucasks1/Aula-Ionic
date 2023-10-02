import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { Produto, ProdutosService } from 'src/app/servico/produtos.service';

@Component({
  selector: 'app-addproduto',
  templateUrl: './addproduto.page.html',
  styleUrls: ['./addproduto.page.scss'],
})
export class AddprodutoPage implements OnInit {

  @Input() u!: Produto;

  atualizar = false;

  dados = {
    descricao: '',
    quantidade: '',
    valor:'',
    serie:'',
  }

  constructor(private modalCtrl: ModalController, private service: ProdutosService, private toastCtrl: ToastController) { }

  ngOnInit() {
    if (this.u) {
      this.atualizar = true;
      this.dados = this.u;
    }
  }

  async enviando(form: NgForm) {
    const produto = form.value;
    if (!produto.descricao ||
      !produto.quantidade ||
      !produto.valor ||
      !produto.serie){
        this.mensagem('Por favor, preencha todos os campos');
      }else if (this.atualizar) {
      this.service.update(produto, this.u.codigo).subscribe(response => {
        this.modalCtrl.dismiss(response);
      })
    }else{
      const serieExist = await firstValueFrom(this.service.getSerie(produto.serie));
      if (serieExist) {
        this.mensagem('Esta serie já existe.');
      }else {
        this.service.create(produto).subscribe(response => {
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