import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { ProductCardComponent } from './product-card.component';
import { productData } from '../../mocks/mock-product';

describe('[Moдуль 2]  Компонент товара', () => {
  let fixture: ComponentFixture<ProductCardComponent>;
  let component: ProductCardComponent;
  let toCartSpy: jasmine.Spy;
  let goToProductSpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    (component as any).product = productData[0];
    fixture.detectChanges();
    spyOn(component as any, 'addToBasket').and.callThrough();
    toCartSpy = spyOn((component as any).toCart, 'emit').and.callThrough();
    spyOn(component as any, 'redirectTo').and.callThrough();
    goToProductSpy = spyOn(
      (component as any).goToProduct,
      'emit'
    ).and.callThrough();
  });
  it('компонент должен иметь метод addToBasket и Output свойства toCart', () => {
    expect((component as any).toCart).toBeTruthy();
    expect((component as any).addToBasket).toBeTruthy();
  });
  it('компонент должен иметь метод redirectTo и Output свойства goToProduct', () => {
    expect((component as any).goToProduct).toBeTruthy();
    expect((component as any).redirectTo).toBeTruthy();
  });

  it('компонент должен иметь свойство toCart и декоратор Output этого свойства', () => {
    expect(component.hasOwnProperty('toCart')).toBeTruthy();
    expect((component as any)?.toCart).toBeInstanceOf(EventEmitter);
  });
  it('компонент должен иметь свойство product и декоратор Input этого свойства', () => {
    expect(component.hasOwnProperty('product')).toBeTruthy();
  });
  it('клик на кнопку "Добавить в корзину" должен вызывать метод addToBasket()', () => {
    const icon = fixture.debugElement.query(By.css('.btn'));
    icon.triggerEventHandler('click', null);
    expect((component as any).addToBasket).toHaveBeenCalledBefore(toCartSpy);
    expect((component as any).toCart.emit).toHaveBeenCalled();
  });
});
