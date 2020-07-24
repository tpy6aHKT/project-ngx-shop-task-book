import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CartComponent } from './cart-component/cart.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CartComponent],
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Список товаров в корзине'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Список товаров в корзине');
  });
  it('компонент должен иметь свойство  cartProducts', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect((app as any).cartProducts).toBeTruthy();
  });
  it('компонент должен иметь свойство terminalMessage', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect((app as any).terminalMessage).toEqual('');
  });
  it('компонент должен иметь метод redirectTo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect((app as any).redirectTo).toBeTruthy();
  });
});
