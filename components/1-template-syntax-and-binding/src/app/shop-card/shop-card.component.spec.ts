import { expProducts } from './../../mocks/products';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCardComponent } from './shop-card.component';
import { By } from '@angular/platform-browser';

describe('[Moдуль 1] Карточка продукта', () => {
  let fixture: ComponentFixture<ShopCardComponent>;
  let component: ShopCardComponent;
  let incrementProductInCartSpy: jasmine.Spy;
  let decrementProductInCartSpy: jasmine.Spy;
  let removeProductFromCartSpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopCardComponent],
    });
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    (component as any).products = expProducts;
    fixture.detectChanges();
    spyOn(component as any, 'incrementProductInCart').and.callThrough();
    incrementProductInCartSpy = spyOn(
      (component as any).incrementProductInCart,
      'emit'
    ).and.callThrough();
    spyOn(component as any, 'decrementProductInCart').and.callThrough();
    decrementProductInCartSpy = spyOn(
      (component as any).decrementProductInCart,
      'emit'
    ).and.callThrough();
    spyOn(component as any, 'removeProductFromCart').and.callThrough();
    removeProductFromCartSpy = spyOn(
      (component as any).removeProductFromCart,
      'emit'
    ).and.callThrough();
  });
  it('компонент должен иметь свойство products', () => {
    expect(component.hasOwnProperty('products')).toBeTruthy();
  });
  it('компонент должен иметь метод incrementProductInCart', () => {
    expect((component as any).incrementProductInCart).toBeTruthy();
  });
  it('компонент должен иметь метод decrementProductInCart', () => {
    expect((component as any).decrementProductInCart).toBeTruthy();
  });
  it('компонент должен иметь метод removeProductFromCart', () => {
    expect((component as any).removeProductFromCart).toBeTruthy();
  });
});
