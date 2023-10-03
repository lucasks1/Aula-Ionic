import { Component, OnInit } from '@angular/core';
import { Receita, ReceitaService } from 'src/app/service/receita.service';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-lanche',
  templateUrl: './lanche.page.html',
  styleUrls: ['./lanche.page.scss'],
})
export class LanchePage implements OnInit {
  receita: Receita[] = [];
  constructor(private service: ReceitaService) { }

  ngOnInit(): void {
    this.service.getCategoria("lanche").subscribe((response) => {
      this.receita = response
      console.log(this.receita)
    }

    )
  }

}
