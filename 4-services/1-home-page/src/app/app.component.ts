import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CategoriesService,
  ICategory,
} from './services/categories/category.service';
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
  public products$!: Observable<IProduct[]>;
  public categories$!: Observable<ICategory[]>;
  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
    this.categories$ = this.categoriesService.getCategories();
  }
}
