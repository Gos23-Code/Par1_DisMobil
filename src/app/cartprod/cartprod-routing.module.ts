import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartprodPage } from './cartprod.page';

const routes: Routes = [
  {
    path: '',
    component: CartprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartprodPageRoutingModule {}
