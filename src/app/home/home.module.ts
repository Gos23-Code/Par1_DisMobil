import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HomeshopComponent } from '../homeshop/homeshop.component';
import { ApiserviceService } from '../apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { CatalogChoiseComponent } from '../catalog-choise/catalog-choise.component';
import { apishop } from '../ApiInterface/interface';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
  ],
  declarations: [HomePage, HomeshopComponent, CatalogChoiseComponent],
  providers: [ApiserviceService]
})
export class HomePageModule {}
