import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { first } from 'rxjs';
import { apishop } from '../ApiInterface/interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cartprod',
  templateUrl: './cartprod.page.html',
  styleUrls: ['./cartprod.page.scss'],
})
export class CartprodPage implements OnInit {

  carrito$ = this.cartSER.carrito$;
  total$ = this.cartSER.total$;
  constructor(private cartSER: CartService, private router: Router, private alertController: AlertController) { }
  
  
    goBackToHome() {
     this.router.navigate(['/home']);
   }

   removeItem(item: apishop) {
    this.cartSER.removeItem(item);
  }

  async process() {
    const carrito = await this.carrito$.pipe(first()).toPromise();

    if (!carrito || carrito.length === 0) {
      const alert = await this.alertController.create({
        header: 'empty cart',
        message: 'No there products in the cart🛒.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Successfull pay',
        message: 'Your pay have been Successfull✅.',
        buttons: ['OK']
      });
      await alert.present();

      this.cartSER.clearCart();
      this.router.navigate(['/home']);
    }
  }
   

  ngOnInit() {
  }
}


