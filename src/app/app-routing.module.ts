import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'shopdetails/:id',
    loadChildren: () => import('./shopdetails/shopdetails.module').then( m => m.ShopdetailsPageModule)
  },

 
  {
    path: 'cartprod',
    loadChildren: () => import('./cartprod/cartprod.module').then( m => m.CartprodPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
