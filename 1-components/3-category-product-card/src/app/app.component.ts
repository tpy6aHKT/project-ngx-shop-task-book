import { Component } from '@angular/core';
import { oneProduct } from '../../../../shared/mocks/1-components/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public product = oneProduct;
  public terminalMessage: string;
  public title = '1. Интерполяция и связывание';
  public addToCart() {
    this.terminalMessage = 'товар добавлен в карзину';
  }
  public goToProduct() {
    this.terminalMessage = 'переход на страницу продукта';
  }
}
