import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagemPageRoutingModule } from './imagem-routing.module';

import { ImagemPage } from './imagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagemPageRoutingModule
  ],
  declarations: [ImagemPage]
})
export class ImagemPageModule {}
