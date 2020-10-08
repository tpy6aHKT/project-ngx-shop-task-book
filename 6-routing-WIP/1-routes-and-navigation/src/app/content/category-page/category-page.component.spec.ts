import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryPageComponent } from './category-page.component';
import { CategoriesService } from '../../services/category.service';
import { ProductsService } from '../../services/products.service';
import { BrandsService } from '../../services/brands.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { CategoryDropdownComponent } from './category-dropdown/category-dropdown.component';
import { BrandsComponent } from './brands/brands.component';
import { PriceInputsComponent } from './price-slider/price-inputs/price-inputs.component';
import { PriceSliderComponent } from './price-slider/price-slider.component';
import { CategoryPageRoutingModule } from './category-page-routing.module';

describe('[Moдуль 6 - Компонент страницы категорий]', () => {
  let fixture: ComponentFixture<CategoryPageComponent>;
  let component: CategoryPageComponent;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoryPageComponent,
        CategoryDropdownComponent,
        PriceSliderComponent,
        BrandsComponent,
        PriceInputsComponent,
      ],

      imports: [
        Ng5SliderModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        CategoryPageRoutingModule,
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        CategoriesService,
        ProductsService,
        BrandsService,
      ],
    });
    fixture = TestBed.createComponent(CategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь свойство brands c значением []', () => {
    expect((component as any).brands).toBeDefined([]);
  });
  it('компонент должен иметь свойство selectedPrices', () => {
    expect((component as any).selectedPrices).toBeDefined([]);
  });

  it('компонент должен иметь свойство selectedBrands c значением null', () => {
    expect((component as any).selectedBrands).toBeDefined();
  });

  it('форма должна быть не пустой', () => {
    expect(component.form.valid).toBeTruthy();
  });

  it('поле name в форме должно быть валидным', () => {
    const brands = component.form.controls.brands;
    expect(brands.valid).toBeTruthy();
  });

  it('поле telephone в форме должно быть валидным', () => {
    const text = component.form.controls.text;
    expect(text.valid).toBeTruthy();
  });

  it('поле prices в форме должно быть валидным', () => {
    const prices = component.form.controls.prices;
    expect(prices.valid).toBeTruthy();
  });

  // it('компонент должен иметь cобственное событие addToCart ', () => {
  //   expect((component as any).addToCart).toBeTruthy();
  //   expect((component as any).addToCart).toBeInstanceOf(EventEmitter);
  // });
  // it('компонент должен иметь cобственное событие goToProduct ', () => {
  //   expect((component as any).goToProduct).toBeTruthy();
  //   expect((component as any).goToProduct).toBeInstanceOf(EventEmitter);
  // });

  // it('при нажатии на кнопку с селектором .add-to-cart должен вызываться метод  addToBasket и срабатывать собстевнное событие addToCart', () => {
  //   spyOn(component as any, 'addToBasket').and.callThrough();
  //   spyOn((component as any)?.addToCart, 'emit').and.callThrough();
  //   const incrementButton = fixture.debugElement.query(
  //     By.css('button.add-to-cart')
  //   );
  //   incrementButton.triggerEventHandler('click', null);
  //   expect((component as any)?.addToBasket).toHaveBeenCalledTimes(1);
  //   expect((component as any)?.addToCart.emit).toHaveBeenCalledTimes(1);
  // });

  // it('при нажатии на блок с селектором .go-to-product должен вызываться метод  redirectTo и срабатывать собстевнное событие goToProduct', () => {
  //   spyOn(component as any, 'redirectTo').and.callThrough();
  //   spyOn((component as any)?.goToProduct, 'emit').and.callThrough();
  //   const incrementButton = fixture.debugElement.query(
  //     By.css('div.go-to-product')
  //   );
  //   incrementButton.triggerEventHandler('click', null);
  //   expect((component as any)?.redirectTo).toHaveBeenCalledTimes(1);
  //   expect((component as any)?.goToProduct.emit).toHaveBeenCalledTimes(1);
  // });

  // it('тег c селекторор [.product-img img] должен иметь правильное связывание свойств src и alt', () => {
  //   (component as any).product = oneProduct;
  //   fixture.detectChanges();
  //   const imgEl = fixture.debugElement.query(By.css('.product-img img'));
  //   expect(imgEl).toBeTruthy();
  //   const { image, name } = (component as any)?.product;
  //   expect(imgEl.attributes.src).toEqual(image);
  //   expect(imgEl.attributes.alt).toEqual(name);
  // });

  // it('тег с селектором .product-desc .product-name  должен правильно интерполировать свойство name продукта', () => {
  //   (component as any).product = oneProduct;
  //   fixture.detectChanges();
  //   const prodNameEL = fixture.debugElement.query(
  //     By.css('.product-desc .product-name')
  //   );
  //   expect(prodNameEL).toBeTruthy();
  //   expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
  //     (component as any)?.product.name
  //   );
  // });

  // it('тег с селектором .product-desc .rate-amount  должен правильно интерполировать свойство feedbacksCount продукта', () => {
  //   (component as any).product = oneProduct;
  //   fixture.detectChanges();
  //   const prodNameEL = fixture.debugElement.query(
  //     By.css('.product-desc .rate-amount')
  //   );
  //   expect(prodNameEL).toBeTruthy();
  //   expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
  //     `${(component as any)?.product.feedbacksCount} отзыва`
  //   );
  // });

  // it('тег с селектором .product-desc .price-text  должен правильно интерполировать свойство price продукта', () => {
  //   (component as any).product = oneProduct;
  //   fixture.detectChanges();
  //   const prodNameEL = fixture.debugElement.query(
  //     By.css('.product-desc .price-text')
  //   );
  //   expect(prodNameEL).toBeTruthy();
  //   expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
  //     `${(component as any)?.product.price}€`
  //   );
  // });

  // it('тег с селектором .actions .price-text  должен правильно интерполировать свойство price продукта', () => {
  //   (component as any).product = oneProduct;
  //   fixture.detectChanges();
  //   const prodNameEL = fixture.debugElement.query(
  //     By.css('.actions .price-text')
  //   );
  //   expect(prodNameEL).toBeTruthy();
  //   expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
  //     `${(component as any)?.product.price}€`
  //   );
  // });
});
