import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPageComponent } from './one-product-page.component';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductPageRoutingModule } from './one-product-page-routing.module';
import { InformationComponent } from './information/information.component';
import { DescriptionComponent } from './description/description.component';
import { FeedbacksComponent } from './description/feedbacks/feedbacks.component';
import { ReviewPipe } from '../../shared/pipes/review.pipe';
import { StarRatingComponent } from '../../shared/components/star-rating/star-rating.component';
import { RatePipe } from '../../shared/pipes/rate.pipe';

describe('[Moдуль 6 - Компонент страницы одного товара]', () => {
  let fixture: ComponentFixture<ProductPageComponent>;
  let component: ProductPageComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductPageComponent,
        InformationComponent,
        DescriptionComponent,
        FeedbacksComponent,
        ReviewPipe,
        StarRatingComponent,
        RatePipe,
      ],
      imports: [
        HttpClientModule,
        RouterModule,
        RouterTestingModule,
        HttpClientModule,
        ProductPageRoutingModule,
      ],
      providers: [ProductsService],
    });
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('компонент должен иметь метод goToBasket ', () => {
  //   expect((component as any).goToBasket).toBeTruthy();
  // });

  // it('компонент должен иметь свойство product c значением null', () => {
  //   expect((component as any).product$).toBeDefined(null);
  // });
});
