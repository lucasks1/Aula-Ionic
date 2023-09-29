import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheffPageRoutingModule } from './cheff-routing.module';

import { CheffPage } from './cheff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheffPageRoutingModule
  ],
  declarations: [CheffPage]
})
export class CheffPageModule {}
