import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddprodutoPageRoutingModule } from './addproduto-routing.module';

import { AddprodutoPage } from './addproduto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddprodutoPageRoutingModule
  ],
  declarations: [AddprodutoPage]
})
export class AddprodutoPageModule {}
