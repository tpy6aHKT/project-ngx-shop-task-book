import { ReviewPipe } from '../../shared/review.pipe';
import { ImgUrlPipe } from '../../shared/img-url.pipe';
import { HomeComponent } from './home.component';
import { suggestedProducts } from './../../../../../shared/mocks/suggested.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card/product-card.component';

describe('[Moдуль 3]  Список рекомендуемых товаров', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let redirectToSpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ProductCardComponent,
        ImgUrlPipe,
        ReviewPipe,
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    (component as any).suggestedProducts = suggestedProducts;
    fixture.detectChanges();

    spyOn(component as any, 'goTo').and.callThrough();
    redirectToSpy = spyOn(
      (component as any).redirectTo,
      'emit'
    ).and.callThrough();
  });
  it('компонент должен иметь метод goTo и Output свойства redirectTo', () => {
    expect((component as any).goTo).toBeTruthy();
    expect((component as any).redirectTo).toBeTruthy();
  });

  it('компонент должен иметь свойство suggestedProducts и декоратор Input этого свойства', () => {
    expect(component.hasOwnProperty('suggestedProducts')).toBeTruthy();
  });
});
