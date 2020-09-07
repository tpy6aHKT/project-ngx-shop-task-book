import { ReviewPipe } from '../../../shared/review.pipe';
import { RatePipe } from '../../../shared/rate.pipe';
import { ImgUrlPipe } from '../../../shared/img-url.pipe';
import { CartProductComponent } from './cart-product.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expProducts } from 'shared/mocks/products';

describe('[Moдуль 1]  Компонент товара в корзине', () => {
  let fixture: ComponentFixture<CartProductComponent>;
  let component: CartProductComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartProductComponent, ImgUrlPipe, RatePipe, ReviewPipe],
    });
    fixture = TestBed.createComponent(CartProductComponent);
    component = fixture.componentInstance;
    (component as any).product = expProducts[0];
    fixture.detectChanges();
  });

  it('компонент должен иметь метод decrementProductInCart ', () => {
    expect((component as any).decrementProductInCart).toBeTruthy();
  });
  it('компонент должен иметь метод removeProductFromCart', () => {
    expect((component as any).removeProductFromCart).toBeTruthy();
  });
  it('компонент должен иметь метод incrementProductInCart', () => {
    expect((component as any).incrementProductInCart).toBeTruthy();
  });
  it('компонент должен иметь свойство product', () => {
    expect((component as any).product).toBeTruthy();
  });

  it('тег с селектором .product-desc должен правильно интерполировать title', () => {
    const prodNameEL = fixture.debugElement.query(By.css('.product-desc'));
    expect(prodNameEL).toBeTruthy();
    const [{ nativeNode: prodNameNode }] = prodNameEL.childNodes;
    expect(prodNameNode.textContent.trim()).toEqual(
      (component as any)?.product.name
    );
  });

  it('тег img должен иметь правильное связывание свойств src и alt', () => {
    const imgWrapEl = fixture.debugElement.query(By.css('.product-img'));
    expect(imgWrapEl).toBeTruthy();
    const {
      images: [{ url }],
      name,
    } = (component as any)?.product;
    const [{ nativeNode: imgNode }] = imgWrapEl.childNodes;
    expect(imgNode.attributes.src.textContent).toEqual(url);
    expect(imgNode.attributes.alt.textContent).toEqual(name);
  });
  it('тег с селектором .price-text должен правильно интерполировать price', () => {
    const { price } = (component as any)?.product;
    const priceEl = fixture.debugElement.query(By.css('.price-text'));
    expect(price).toBeTruthy();
    const [{ nativeNode: priceNode }] = priceEl.childNodes;
    const priceFromNode = priceNode.textContent.trim();
    expect(`${priceFromNode.slice(1, 2)}${priceFromNode.slice(3, 6)}`).toEqual(
      price.toString()
    );
  });
  it('тег с селектором .price-text  и .counter__value должен правильно интерполировать total', () => {
    const { price, count } = (component as any)?.product;
    const priceEl = fixture.debugElement.query(By.css('.price-text'));
    const counterEl = fixture.debugElement.query(By.css('.counter__value'));
    expect(price).toBeTruthy();
    const [{ nativeNode: priceNode }] = priceEl.childNodes;
    const [{ nativeNode: counterNode }] = counterEl.childNodes;

    const priceFromNode = priceNode.textContent.trim();
    const counterFromNode = counterNode.textContent.trim();
    expect(`${priceFromNode.slice(1, 2)}${priceFromNode.slice(3, 6)}`).toEqual(
      price.toString()
    );
    expect(Number(counterFromNode)).toEqual(count);
  });
});
