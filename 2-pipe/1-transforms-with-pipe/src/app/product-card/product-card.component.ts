import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class ProductCardComponent {}
