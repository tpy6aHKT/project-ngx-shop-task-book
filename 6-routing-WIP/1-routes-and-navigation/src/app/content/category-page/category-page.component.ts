import { IProductApi } from './../../../../../../shared/mocks/6-routing/product-information';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ICategory } from '../../../../../../shared/mocks/6-routing/categories';
import { CategoriesService } from '../../services/category.service';
import { ProductsService } from '../../services/products.service';
import { BrandsService } from '../../services/brands.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-shop-category-page',
  templateUrl: './category-page.component.html',
})
export class CategoryPageComponent implements OnInit {
  public selectedPrices: number[] = [];
  public categories$: Observable<ICategory[]> = null;
  public products$: Observable<IProductApi> = null;
  // tslint:disable-next-line: ban-types
  public brands$: Observable<Object> = null;
  public brands: string[] = [];
  public selectedBrands: string[] = [];
  public selectedSubCategory = null;

  public form: FormGroup = this.fb.group({
    brands: [[]],
    text: [''],
    prices: [[0, 2000]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private brandsService: BrandsService,
    private router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}
  public ngOnInit(): void {
    this.categories$ = this.categoriesService.getCategories();
    const path = this.activatedRoute.snapshot.params;
    this.getData(path.subCategory);

    this.form.valueChanges.subscribe((data) => {
      this.filterByParams(data);
    });
  }

  subCategorySelect(subCategory: string): void {
    this.form.patchValue({
      prices: [0, 2000],
      text: '',
      selectedBrands: [],
    });
    this.getData(subCategory);
  }

  getData(subCategory: string): void {
    this.selectedSubCategory = subCategory;
    this.router.navigate(['/category', subCategory]);
    this.brands$ = this.brandsService.getBrands({
      prices: [0, 2000],
      id: subCategory,
    });
    this.products$ = this.productsService.getProductsBySubCategory({
      currentCategory: subCategory,
    });
  }
  filterByParams(data: {
    prices: number[];
    text: string;
    brands: string[];
  }): void {
    this.router.navigate(['/category', this.selectedSubCategory], {
      queryParams: {
        brands:
          (this.form.get('brands').value as string[]).join(',') || undefined,
        text: this.form.get('text').value || undefined,
        prices:
          (this.form.get('prices').value &&
            (this.form.get('prices').value as number[]).join(',')) ||
          undefined,
      },
    });
    this.products$ = this.productsService.getProductsBySubCategory({
      currentCategory: this.selectedSubCategory,
      priceRange: data.prices,
      text: data.text,
      selectedBrands: data.brands,
    });
  }
}
