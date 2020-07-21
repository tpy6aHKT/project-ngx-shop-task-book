import { IProduct } from '../../../../../shared/interfaces/product.interface';
import { expProducts } from '../../../../../shared/mocks/products';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})
// @ts-ignore
export class ShopCardComponent {
  constructor() {}

  public product: IProduct = expProducts[0];
}
