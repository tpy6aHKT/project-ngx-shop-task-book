import { categoriesMock } from './../../../../../shared/mocks/categories.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CategoryDropdownComponent } from './category-dropdown.component';

describe('[Moдуль 1]  Компонент товара в корзине', () => {
  let fixture: ComponentFixture<CategoryDropdownComponent>;
  let component: CategoryDropdownComponent;
  let selectedSubCategorySpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryDropdownComponent],
    });
    fixture = TestBed.createComponent(CategoryDropdownComponent);
    component = fixture.componentInstance;
    (component as any).categories = categoriesMock;
    (component as any).currentCategory = {};

    fixture.detectChanges();
    spyOn(component as any, 'categorySelect').and.callThrough();
    selectedSubCategorySpy = spyOn(
      (component as any).selectedSubCategory,
      'emit'
    ).and.callThrough();
  });

  it('компонент должен иметь свойство categories ', () => {
    expect((component as any).categories).toBeTruthy();
  });
  it('компонент должен иметь метод categorySelect', () => {
    expect((component as any).categorySelect).toBeTruthy();
  });
  it('компонент должен иметь метод hover', () => {
    expect((component as any).hover).toBeTruthy();
  });
  it('компонент должен иметь свойство currentCategory ', () => {
    expect((component as any).currentCategory).toBeTruthy();
  });

  it('компонент должен иметь свойство selectedSubCategory', () => {
    expect((component as any).selectedSubCategory).toBeTruthy();
  });

  it('тег с селектором .category-name должен правильно интерполировать значение', () => {
    const categoryNameEL = fixture.debugElement.query(By.css('.category-name'));
    expect(categoryNameEL).toBeTruthy();
    const [{ nativeNode: categoryNameNode }] = categoryNameEL.childNodes;
    expect(categoryNameNode.textContent.trim()).toEqual(
      (component as any)?.categories[0].name
    );
  });

  it('тег с селектором .subCatName должен правильно интерполировать значение', () => {
    const subCategoryNameEL = fixture.debugElement.query(By.css('.subCatName'));
    expect(subCategoryNameEL).toBeTruthy();
    const [{ nativeNode: subCategoryNameNode }] = subCategoryNameEL.childNodes;
    expect(subCategoryNameNode.textContent.trim()).toEqual(
      (component as any)?.categories[0].subCategories[0].name
    );
  });
  it('клик на элемент подкатегории должен быть вызыван метод categorySelect()', () => {
    const subCat = fixture.debugElement.query(By.css('.subCat'));
    subCat.triggerEventHandler('click', null);
    expect((component as any).categorySelect).toHaveBeenCalledBefore(
      selectedSubCategorySpy
    );
    expect((component as any).selectedSubCategory.emit).toHaveBeenCalled();
  });
});
