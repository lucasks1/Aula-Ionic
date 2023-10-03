import { Component, OnInit } from '@angular/core';
import { Receita, ReceitaService } from 'src/app/service/receita.service';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AddreceitaPage } from '../addreceita/addreceita.page';
@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {
receitas:Receita[] = [];
  constructor(private service: ReceitaService ,private modalCtrl:ModalController, private toastCtrl : ToastController ) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      response=>{
        this.receitas = response;
      }
    )
  }

  remover(id:any){
    this.service.remove(id).subscribe(() =>{
      this.service.getAll().subscribe(
        response => { 
          this.receitas = response;
        }
      )
    }
    
    )
  }

  novaReceita(){
    this.modalCtrl.create({
      component:AddreceitaPage
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }
    ).then(({data}) =>{
      this.service.getAll().subscribe(response=>{
        this.receitas = response;
      }

      );this.toastCtrl.create({
        message:'Receita cadastrada',
        duration:2000
      }).then(toast =>{
        toast.present();
      }

      )
    }
    )
  }

  atualizar(r: Receita){
    this.modalCtrl.create({
      component:AddreceitaPage,
      componentProps:{r}
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    } 
      ).then(({data})=>{
        this.service.getAll().subscribe(response=>{
          this.receitas = response;
        }

        )
      }
      )
  }

}
