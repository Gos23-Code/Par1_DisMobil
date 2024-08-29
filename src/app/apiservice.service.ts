import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apishop } from './ApiInterface/interface';

@Injectable({
  providedIn: 'root'
})


export class ApiserviceService {
  
private Apibase = `https://fakestoreapi.com/products`
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{

    return this.http.get<any>(this.Apibase);
  }

  getCatalog(): Observable<any>{

    return this.http.get<string[]>("https://fakestoreapi.com/products/categories");
  }

  getProductById(id: number): Observable<apishop>{
    const url= `https://fakestoreapi.com/products/${id}`;
    return this.http.get<apishop>(url);
  }
}
