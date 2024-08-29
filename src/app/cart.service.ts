import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { apishop } from './ApiInterface/interface';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
    private carrito: apishop[] = [];
    private total = new BehaviorSubject<number>(0);
    carrito$ = new BehaviorSubject<apishop[]>(this.carrito);
    total$ = this.total.asObservable();

  constructor() { }

  addToCart(product: apishop) {
    this.carrito.push(product);
    this.updateTotal();
    this.carrito$.next(this.carrito);
  }

  removeItem(product: apishop) {
    
    const index = this.carrito.findIndex(item => item.id === product.id);
    
    if (index !== -1) {
      
      this.carrito.splice(index, 1);
      this.updateTotal();
      this.carrito$.next(this.carrito);
    }
  }
  
  clearCart() {
    this.carrito = []; 
    this.updateTotal(); 
    this.carrito$.next(this.carrito); 
  }

  private updateTotal() {
    const total = this.carrito.reduce((acc, product) => acc + product.price, 0);
    this.total.next(total);
  }
}
