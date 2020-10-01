import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IProduct,
  ProductsService,
} from './services/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public title = 'Компонент страницы продукта';

  public product$!: Observable<IProduct>;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.product$ = this.productsService.getProductById(
      'korpus-cougar-gemini-m-385tmb00001-seryj'
    );
  }
}
