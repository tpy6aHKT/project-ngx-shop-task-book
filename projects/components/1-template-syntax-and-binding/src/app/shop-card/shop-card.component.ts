import { Component, Input } from '@angular/core';
import { IProduct } from 'projects/shared/interfaces/product.interface';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})
export class ShopCardComponent {
  public product: IProduct;
  constructor() {}
}
