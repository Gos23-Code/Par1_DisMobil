import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopdetailsPageRoutingModule } from './shopdetails-routing.module';

import { ShopdetailsPage } from './shopdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopdetailsPageRoutingModule
  ],
  declarations: [ShopdetailsPage]
})
export class ShopdetailsPageModule {}
