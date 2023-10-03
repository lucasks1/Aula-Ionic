import { Component, OnInit } from '@angular/core';
import { Receita, ReceitaService } from 'src/app/service/receita.service';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sopa',
  templateUrl: './sopa.page.html',
  styleUrls: ['./sopa.page.scss'],
})
export class SopaPage implements OnInit {
  receita: Receita[] = [];
  constructor(private service: ReceitaService) { }

  ngOnInit(): void {
    this.service.getCategoria("sopa").subscribe((response) => {
      this.receita = response
      console.log(this.receita)
    }

    )
  }

}