import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { categories } from '../../../../shared/mocks/3-directives/categories';
import {
  IProduct,
  ProductsService,
} from './services/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
// @ts-ignore
export class AppComponent implements OnInit {
  public title = 'Компонент домашней страницы';
  public categories = categories;
  public products: IProduct[] = [];
  public products$!: Observable<IProduct[]>;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }
}
