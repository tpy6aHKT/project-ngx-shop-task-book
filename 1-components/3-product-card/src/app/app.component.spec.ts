import { CategoryProductComponent } from './product-card/product-card.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('[Moдуль 2] App компонент', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CategoryProductComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component as any, 'toCart').and.callThrough();
    spyOn(component as any, 'goToProduct').and.callThrough();
  }));
  it(`Компонент должен иметь правильное название '1. Интерполяция и связывание'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('1. Интерполяция и связывание');
  });

  it('Компонент должен отрисовать значение переменнойы title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      '1. Интерполяция и связывание'
    );
  });
  it('компонент должен иметь публичное свойство productData', () => {
    expect((component as any)?.productData).toBeTruthy();
  });
  it('компонент должен иметь метод toCart', () => {
    expect((component as any)?.toCart).toBeTruthy();
  });
  it('компонент должен иметь метод goToProduct', () => {
    expect((component as any)?.goToProduct).toBeTruthy();
  });
});
