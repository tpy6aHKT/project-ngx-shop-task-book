import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../../../shared/mocks/6-routing/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'ngx-shop-one-product-page',
  templateUrl: './one-product-page.component.html',
})
export class ProductPageComponent implements OnInit {
  public product$: Observable<IProduct> = null;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.product$ = this.productsService.getProductById(
      'korpus-cougar-gemini-m-385tmb00001-seryj'
    );
  }
}
