import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarroCompraService {

  private car: any[] = [];

  constructor() { }

  addProducto(producto: any){
    this.car.push(producto);
  }

  obtCar(){
    return this.car;
  }
}
