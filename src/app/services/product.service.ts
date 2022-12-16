import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { HttpClient } from "@angular/common/http";
import { ProductResponse } from '@models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = environment.API_PRODUCTS;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.url}/products?limit=100`);
  }
}
