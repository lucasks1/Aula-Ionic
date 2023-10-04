import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Receita } from 'src/app/service/receita.service';
import { ReceitaService } from 'src/app/service/receita.service';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-addreceita',
  templateUrl: './addreceita.page.html',
  styleUrls: ['./addreceita.page.scss'],
})
export class AddreceitaPage implements OnInit {

  @Input() r!: Receita;

  atualizar = false;

  dados = {
    descricao: '',
    categoria: '',
    ingredientes: '',
    preparo: '',
    cheff: '',

  }

  constructor(private modalCtrl: ModalController, private service: ReceitaService, private toastCtrl: ToastController) { }

  ngOnInit() {
    if (this.r) {
      this.atualizar = true;
      this.dados = this.r;
    }
  }

  async enviando(from: NgForm) {
    const receita = from.value;
    if (!receita.descricao || 
      !receita.categoria ||
      !receita.ingredientes ||
      !receita.preparo ||
      !receita.cheff


    ) {
      this.mensagem("preencha tudo")
    } else if (this.atualizar) {
      this.service.update(receita, this.r.id).subscribe(response => {
        this.modalCtrl.dismiss(response);
      }

      )
    } else {
      this.service.create(receita).subscribe(response => {
        //fecharModal()
        this.modalCtrl.dismiss(response);
      }
      )
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
