import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

import { IProduct } from '../../../shared/product.interface';

@Component({
  selector: 'ngx-shop-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartProductComponent {}
