import { expProducts } from './../../../../shared/mocks/products';
import { IProduct } from 'shared/interfaces/product.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = ' Список товаров в корзине';
  public terminalMessage: any = '';
  public cartProducts = expProducts;
  public redirectTo(product: IProduct) {
    this.terminalMessage = product;
  }
}
