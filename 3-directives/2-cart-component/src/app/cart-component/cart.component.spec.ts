import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expProducts } from 'shared/mocks/products';
import { CartComponent } from './cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';

describe('[Moдуль 3]  Компонент списка товаров в корзине', () => {
  let fixture: ComponentFixture<CartComponent>;
  let component: CartComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent, CartProductComponent],
    });
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    (component as any).cartProducts = [];
    fixture.detectChanges();
  });

  it('компонент должен иметь метод cartProducts ', () => {
    expect((component as any).cartProducts).toBeTruthy();
  });
  it('компонент должен иметь метод removeProductFromCart', () => {
    expect((component as any).removeProductFromCart).toBeTruthy();
  });
  it('компонент должен иметь метод incrementProductInCart', () => {
    expect((component as any).incrementProductInCart).toBeTruthy();
  });
  it('компонент должен иметь метод  decrementProductInCart', () => {
    expect((component as any).decrementProductInCart).toBeTruthy();
  });
});
