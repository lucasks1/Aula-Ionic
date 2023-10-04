import { Component, OnInit } from '@angular/core';
import { ImagemService  } from 'src/app/service/imagem.service';


@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.page.html',
  styleUrls: ['./imagem.page.scss'],
})
export class ImagemPage implements OnInit {

  imagem: Ima[] = [];
  constructor() { }

  ngOnInit() {
    this.service.getAll().subscribe
  }

}
