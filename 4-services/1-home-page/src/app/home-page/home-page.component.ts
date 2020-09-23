import { Component, Input } from '@angular/core';
import { categories } from '../../../../../shared/mocks/3-directives/categories';
import { expProducts } from '../../../../../shared/mocks/products';

@Component({
  selector: 'ngx-shop-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
// @ts-ignore
export class HomePageComponent {
  @Input() public categories = categories;
  @Input() public products = expProducts;
  goToBasket() {}
  redirectTo(val) {}
  goToProduct() {}
}
