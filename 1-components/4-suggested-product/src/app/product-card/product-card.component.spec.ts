import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { productData } from '../../mocks/mock-product';
import { By } from '@angular/platform-browser';

describe('[Moдуль 1]  Компонент рекомендуемого товара', () => {
  let fixture: ComponentFixture<ProductCardComponent>;
  let component: ProductCardComponent;
  let goToProductSpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    (component as any).product = productData;
    fixture.detectChanges();

    spyOn(component as any, 'redirectTo').and.callThrough();
    goToProductSpy = spyOn(
      (component as any).goToProduct,
      'emit'
    ).and.callThrough();
  });
  it('компонент должен иметь метод redirectTo и Output свойства goToProduct', () => {
    expect((component as any).goToProduct).toBeTruthy();
    expect((component as any).redirectTo).toBeTruthy();
  });

  it('компонент должен иметь свойство product и декоратор Input этого свойства', () => {
    expect(component.hasOwnProperty('product')).toBeTruthy();
  });
  it('тег с селектором .card-title должен правильно интерполировать имя товара', () => {
    const titleEL = fixture.debugElement.query(By.css('.card-title'));
    expect(titleEL).toBeTruthy();
    const { name } = (component as any)?.product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(titleNode.textContent.trim()).toEqual(name);
  });
  it('тег img должен иметь правильное связывание свойств src через пайп и alt', () => {
    const imgEL = fixture.debugElement.query(By.css('.card-img-top'));
    expect(imgEL).toBeTruthy();
    const { name } = (component as any)?.product;
    const src = (component as any)?.product.images[0].url;
    expect(imgEL.attributes.src).toEqual(src);
    expect(imgEL.attributes.alt).toEqual(name);
  });

  it('тег с селектором .rate-amount должен правильно интерполировать количество отзывов к товара', () => {
    const rateEL = fixture.debugElement.query(By.css('.rate-amount'));
    expect(rateEL).toBeTruthy();
    const { feedbacksCount } = (component as any)?.product;
    const [{ nativeNode: rateNode }] = rateEL.childNodes;
    expect(Number(rateNode.textContent.substring(0, 2).trim())).toEqual(
      feedbacksCount
    );
  });
  it('тег с селектором .price-text должен правильно интерполировать цену товара', () => {
    const titleEL = fixture.debugElement.query(By.css('.price-text'));
    expect(titleEL).toBeTruthy();
    const { price } = (component as any)?.product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(Number(titleNode.textContent.slice(1).trim())).toEqual(price);
  });

  it('клик на компонент должен вызывать метод redirectTo()', () => {
    const icon = fixture.debugElement.query(By.css('.card-component'));
    icon.triggerEventHandler('click', null);
    expect((component as any).redirectTo).toHaveBeenCalledBefore(
      goToProductSpy
    );
    expect((component as any).goToProduct.emit).toHaveBeenCalled();
  });
});
