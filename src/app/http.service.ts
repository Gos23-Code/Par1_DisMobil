import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly httpclient: HttpClient) { }
  public get<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
      this.httpclient.get<T>(url).subscribe({
        next(value) {
          resolve(value);   
        },
        error(err) {
          reject(err);
        },
      });
    });
  }
}
