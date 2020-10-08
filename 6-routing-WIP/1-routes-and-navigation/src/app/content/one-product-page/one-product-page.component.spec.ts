import { FooterComponent } from './../../footer/footer.component';
import { HeaderComponent } from './../../header/header.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPageComponent } from './one-product-page.component';

describe('[Moдуль 6 - Компонент страницы одного товара]', () => {
  let fixture: ComponentFixture<ProductPageComponent>;
  let component: ProductPageComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent, ProductPageComponent, HeaderComponent],
    });
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь метод goToBasket ', () => {
    expect((component as any).goToBasket).toBeTruthy();
  });

  it('компонент должен иметь свойство product c значением null', () => {
    expect((component as any).product).toBeDefined(null);
  });
});
