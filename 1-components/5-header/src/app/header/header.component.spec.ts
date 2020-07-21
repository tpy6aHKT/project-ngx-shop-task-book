import { HeaderComponent } from '../header/header.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('[Moдуль 1] Хедер компонент', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  let goToBasketSpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    (component as any).counter = 7;
    fixture.detectChanges();
    spyOn(component as any, 'redirectTo').and.callThrough();
    goToBasketSpy = spyOn(
      (component as any).goToBasket,
      'emit'
    ).and.callThrough();
  });
  it('компонент должен иметь метод redirectTo и Output свойства goToProduct', () => {
    expect((component as any).goToBasket).toBeTruthy();
    expect((component as any).redirectTo).toBeTruthy();
  });
  it('тег с селектором product-counter должен правильно интерполировать значение ', () => {
    const counter = fixture.debugElement.query(By.css('.product-counter'));
    expect(counter).toBeTruthy();
    const [{ nativeNode: counterNode }] = counter.childNodes;
    expect(Number(counterNode.textContent)).toEqual((component as any).counter);
  });
});
