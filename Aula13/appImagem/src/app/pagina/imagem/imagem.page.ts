import { Component, OnInit } from '@angular/core';
import { ImagemService, Imagem} from 'src/app/service/imagem.service';
import { ModalController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.page.html',
  styleUrls: ['./imagem.page.scss'],
})
export class ImagemPage implements OnInit {

  imagem: Imagem[] = [];
  constructor(private service: ImagemService, private modalCtrl: ModalController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      response =>{
        this.imagem = response;
        //console.log(response);
      }
    )
  }

}
