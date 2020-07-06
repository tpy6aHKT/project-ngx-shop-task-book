import { IProduct } from './../../../../../shared/interfaces/product.interface';
import { expProducts } from './../../../../../shared/mocks/products';
import { Component } from '@angular/core';


@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})
// @ts-ignore
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
