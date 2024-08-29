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
  producto: any;

  constructor(private carr: CartService, private readonly activRouter: ActivatedRoute, private readonly rout: Router, private readonly apIService: ApiserviceService) { }
  product: apishop | undefined;
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
      if (this.product) {
        this.carr.addToCart(this.product);
        this.rout.navigate(['/cartprod']);
      }
    }
    // Podrías mostrar una notificación o redirigir a otra página después de agregar al carrito
  }

