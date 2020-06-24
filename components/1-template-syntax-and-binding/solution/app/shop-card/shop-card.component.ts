import { expProducts } from './../../../src/mocks/products';
import { Component } from '@angular/core';
import { IProduct } from 'shared/interfaces/product.interface';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})
export class ShopCardComponent {
  constructor() {}

  public products: IProduct[] = expProducts;

  public decrementProductInCart(product: IProduct): void {
    product.count--;
  }

  public removeProductFromCart(products: IProduct[], index: number): void {
    products.splice(index, 1);
  }

  public incrementProductInCart(product: IProduct): void {
    product.count++;
  }
}
