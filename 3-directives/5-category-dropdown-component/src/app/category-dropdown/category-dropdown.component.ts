import { Component, Input } from '@angular/core';
import { ICategory } from '../../../../../shared/mocks/categories.mock';

@Component({
  selector: 'ngx-shop-category-dropdown',
  templateUrl: './category-dropdown.component.html',
})
export class CategoryDropdownComponent {
  @Input()
  public categories!: ICategory[];

  public currentIndex: number | null = null;
  public currentCategory?: string;

  public hover(index: number): void {
    this.currentIndex = index;
  }
  public categorySelect(subCategoryId: string): void {}
}
