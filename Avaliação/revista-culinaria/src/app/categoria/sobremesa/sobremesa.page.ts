import { Component, OnInit } from '@angular/core';
import { Receita, ReceitaService } from 'src/app/service/receita.service';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sobremesa',
  templateUrl: './sobremesa.page.html',
  styleUrls: ['./sobremesa.page.scss'],
})
export class SobremesaPage implements OnInit {
  receita: Receita[] = [];
  constructor(private service: ReceitaService) { }

  ngOnInit(): void {
    this.service.getCategoria("sobremesa").subscribe((response) => {
      this.receita = response
      console.log(this.receita)
    }

    )
  }

}