import { Component, OnInit } from '@angular/core';
import { Receita, ReceitaService } from 'src/app/service/receita.service';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-refeicao',
  templateUrl: './refeicao.page.html',
  styleUrls: ['./refeicao.page.scss'],
})
export class RefeicaoPage implements OnInit {

  receita: Receita[] = [];
  constructor(private service: ReceitaService) { }

  ngOnInit(): void {
    this.service.getCategoria("refeição").subscribe((response) => {
      this.receita = response
      console.log(this.receita)
    }

    )
  }

}