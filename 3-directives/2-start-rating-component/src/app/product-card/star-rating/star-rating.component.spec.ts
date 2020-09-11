import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StarRatingComponent } from './star-rating.component';
import { oneProduct } from '../../../../../../shared/mocks/3-directives/product';
import { DebugElement } from '@angular/core';

describe('[Moдуль 3 -  Компонент рейтинга товара]', () => {
  let fixture: ComponentFixture<StarRatingComponent>;
  let component: StarRatingComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarRatingComponent],
    });
    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь метод highlight ', () => {
    expect((component as any).highlight).toBeTruthy();
  });

  it('компонент должен иметь свойство feedbackRate c значением 0', () => {
    expect((component as any).feedbackRate).toBeDefined();
    expect((component as any).feedbackRate).toEqual(0);
  });

  it('компонент должен иметь свойство coloredStar c значением "star_border" ', () => {
    expect((component as any).coloredStar).toBeDefined();
    expect((component as any).coloredStar).toEqual('star_border');
  });

  it('компонент должен иметь свойство stars c значением [0, 1, 2, 3, 4]', () => {
    expect((component as any).stars).toBeDefined();
    expect((component as any).stars).toEqual([0, 1, 2, 3, 4]);
  });

  it('количество активных звезд должно быть равным рейтингу ', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const stars: DebugElement[] = fixture.debugElement.queryAll(
      By.css('.fa.fa-star')
    );
    expect(stars).toBeTruthy();
    const rating = (component as any)?.product.rating;
    expect(stars.length).toEqual(Math.round(rating));
  });
});
