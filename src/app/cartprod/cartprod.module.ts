import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartprodPageRoutingModule } from './cartprod-routing.module';

import { CartprodPage } from './cartprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartprodPageRoutingModule, 
    CurrencyPipe
  ],
  declarations: [CartprodPage]
})
export class CartprodPageModule {}
