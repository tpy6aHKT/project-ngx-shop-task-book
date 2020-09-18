import { Component, Input } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/3-directives/product-information';

@Component({
  selector: 'ngx-shop-information',
  templateUrl: './information.component.html',
})
export class InformationComponent {
  @Input()
  public product?: IProduct;
  public isShow = false;

  public async addToBasket(product: IProduct): Promise<void> {}

  public show(): void {
    this.isShow = !this.isShow;
  }
}
