import { IProductApi } from './../../../../../../shared/mocks/6-routing/product-information';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ICategory } from '../../../../../../shared/mocks/6-routing/categories';
import { CategoriesService } from '../../services/category.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'ngx-shop-category-page',
  templateUrl: './category-page.component.html',
})
export class CategoryPageComponent implements OnInit {
  public selectedPrices: number[] = [];
  public categories$: Observable<ICategory[]> = null;
  public products$: Observable<IProductApi> = null;
  //@Output()
  // public confirm: EventEmitter<FormData> = new EventEmitter<FormData>();
  brands: string[] = [];

  selectedBrands: string[] = [];

  public form: FormGroup = this._fb.group({
    brands: [[]],
    searchByName: [''],
    prices: [[0, 2000]],
  });

  constructor(
    private readonly _fb: FormBuilder,
    private categoriesService: CategoriesService,
    private productsService: ProductsService
  ) {}

  public ngOnInit(): void {
    this.categories$ = this.categoriesService.getCategories();
    //  this.products$ = this.productsService.getProductsBySubCategory(
    //   'kompyutery-noutbuki-i-po'
    //  );

    this.form.valueChanges.subscribe((data) => {
      // this.confirm.emit(data);
    });
  }
}
