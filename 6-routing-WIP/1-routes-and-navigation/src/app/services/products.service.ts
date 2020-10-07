import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../../shared/mocks/6-routing/products';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`api/products/suggestion`);
  }
  public getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`api/products/${id}`);
  }
}
