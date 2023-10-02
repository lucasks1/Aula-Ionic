import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Produto, ProdutosService } from 'src/app/servico/produtos.service';
import { AddprodutoPage } from '../addproduto/addproduto.page';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  produtos: Produto[] = [];
  constructor(private service: ProdutosService, private modalCtrl: ModalController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      response =>{
        this.produtos = response;
        //console.log(response);
      }
    )
  }

  remover(codigo: any) {
    this.service.remove(codigo).subscribe(() => {
      this.service.getAll().subscribe(
        response => {
          this.produtos = response;
        }
      )
    });
    this.toastCtrl.create({
      message: 'Produto deletado com sucesso',
      duration: 2000
    }).then(toast => {
      toast.present();
    })
  }



  novoProduto() {
    this.modalCtrl.create({
      component: AddprodutoPage
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({ data }) => {
      this.service.getAll().subscribe(response => {
        this.produtos = response;
      });
      this.toastCtrl.create({
        message: 'Produto cadastrado com sucesso',
        duration: 2000
      }).then(toast => {
        toast.present();
      })
    })

  }

  atualizar(u: Produto) {
    this.modalCtrl.create({
      component: AddprodutoPage,
      componentProps: { u }
    }).then(modal => {  
      modal.present();
      return modal.onDidDismiss();
    }).then(({ data }) => {
      this.service.getAll().subscribe(response => {
        this.produtos = response;
      });
      this.toastCtrl.create({
        message: 'Produto atualizado com sucesso',
        duration: 2000
      }).then(toast => {
        toast.present();
      })
    })

  }

}
