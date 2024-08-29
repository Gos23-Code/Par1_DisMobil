import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopdetailsPageRoutingModule } from './shopdetails-routing.module';

import { ShopdetailsPage } from './shopdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopdetailsPageRoutingModule,
    CurrencyPipe
  ],
  declarations: [ShopdetailsPage]
})
export class ShopdetailsPageModule {}
