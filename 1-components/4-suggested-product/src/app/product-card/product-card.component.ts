import { IProduct } from './../../../../../shared/interfaces/product.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input()
  public product!: IProduct;

  public redirectTo(productId: string): void {
    // this._store.dispatch(
    //   go({
    //     path: ['/category', this.product.subCategory, this.product._id],
    //   })
    // );
  }
}
