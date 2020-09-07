import { Component } from '@angular/core';
import { IProduct, oneProduct } from '../../../../shared/mocks/2-pipes/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'Rate & Review plural pipe';
  public product: IProduct = oneProduct;
}
