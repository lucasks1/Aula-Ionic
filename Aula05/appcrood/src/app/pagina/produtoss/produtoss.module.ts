import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutossPageRoutingModule } from './produtoss-routing.module';

import { ProdutossPage } from './produtoss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutossPageRoutingModule
  ],
  declarations: [ProdutossPage]
})
export class ProdutossPageModule {}
