import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { apishop } from '../ApiInterface/interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PR } from '../interfaceface/interfacePR';
import { CartService } from '../cart.service';




@Component({
  selector: 'app-shopdetails',
  templateUrl: './shopdetails.page.html',
  styleUrls: ['./shopdetails.page.scss'],
})
export class ShopdetailsPage implements OnInit {

  public details!: PR;
  private id!: number;
  productINV: apishop | null = null;


  constructor(private carr: CartService, private  activRouter: ActivatedRoute, private rout: Router, private  apIService: ApiserviceService) { }
  // product: apishop | undefined;
  // product: any;
  async ngOnInit() {

    const id = this.activRouter.snapshot.paramMap.get('id');
    if(id){
      this.apIService.getProductById(+id).subscribe(
      (data: apishop) => {
        this.productINV = data;
      },
      (error) => {
        console.error('base de datos de virus ha sido desactualizada', error)
      }
     )
    }
  }

   agregarAlCarrito() {
       if (this.productINV) {
         this.carr.addToCart(this.productINV);
         this.rout.navigate(['/cartprod']);
       }
     }

  // agregarAlCarrito() {
  //   if (this.product) {
  //     this.carr.addToCart(this.product);
  //     this.rout.navigate(['/cartprod']);
  //   } else {
  //     console.error("Producto no disponible para agregar al carrito");
  // }
  
}

