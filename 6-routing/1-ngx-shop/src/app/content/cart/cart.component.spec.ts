import { CartProductComponent } from './cart-product/cart-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from '../../services/cart.service';
import { CartComponent } from './cart.component';
import { SharedModule } from '../../shared/shared.module';
import { OrderFormComponent } from './order-form/order-form.component';

describe('[Moдуль 6 - Компонент страницы корзины]', () => {
  let fixture: ComponentFixture<CartComponent>;
  let component: CartComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderFormComponent, CartProductComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
      providers: [CartService],
    });
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь метод getData ', () => {
    expect((component as any).getData).toBeTruthy();
  });
});
