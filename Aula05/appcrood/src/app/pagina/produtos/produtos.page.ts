import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProdutosService, Produto } from 'src/app/servico/produtos.service';
import { ToastController } from '@ionic/angular';
import { AddProdutoPage } from '../add-produto/add-produto.page';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  constructor(private service: ProdutosService, private moadlCtrl: ModalController, private toastCrtl: ToastController) { }

  produto: Produto[] = [];

  ngOnInit() {
    this.service.all().subscribe(
      response => {
        this.produto = response;
      }
    )
  }

  remover(codigo: any) {
    this.service.remover(codigo).subscribe(() => {
      this.service.all().subscribe(
        response => {
          this.produto = response;
        }
      )
    }

    )
  }

  novoProduto() {
    this.moadlCtrl.create({
      component: AddProdutoPage
    }).then(modal => {
      modal.present();
      //esta instrução pega o retorno da página
      return modal.onDidDismiss();
    }).then(({ data }) => {
      // fazemos o retorno das informações que estão no onOnInit
      this.service.all().subscribe(response => {
        this.produto = response;
      });
      this.toastCrtl.create({
        message: 'Usuário cadastrado com sucesso',
        duration: 2000
      }).then(toast => {
        toast.present();
      })
    })
  }

  atualizar(p: Produto) {
    // console.log(u);
    this.moadlCtrl.create({
      component: AddProdutoPage,
      //abaixo estamos passando o conteúdo de p
      componentProps: { p }
    }).then(modal => {  
      modal.present();
      return modal.onDidDismiss();
    }).then(({ data }) => {
      this.service.all().subscribe(response => {
        this.produto = response;
        this.toastCrtl.create({
          message: 'Produto cadastrado com sucesso',
          duration: 2000
        }).then(toast => {
          toast.present();
        })
      })
    })

  }
}
