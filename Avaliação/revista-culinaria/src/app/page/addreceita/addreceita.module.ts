import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddreceitaPageRoutingModule } from './addreceita-routing.module';

import { AddreceitaPage } from './addreceita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddreceitaPageRoutingModule
  ],
  declarations: [AddreceitaPage]
})
export class AddreceitaPageModule {}
