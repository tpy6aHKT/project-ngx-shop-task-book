import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoriesService } from '../../services/category.service';
import { ProductsService } from '../../services/products.service';
import { HomePageComponent } from './home-page.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

describe('[Moдуль 4 - Компонент домашней страницы]', () => {
  let fixture: ComponentFixture<HomePageComponent>;
  let component: HomePageComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        ProductCardComponent,
        SideMenuComponent,
      ],
      imports: [HttpClientModule, RouterTestingModule, HttpClientModule],
      providers: [ProductsService, CategoriesService],
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('компонент должен иметь свойство products co значением null', () => {
  //   expect((component as any).products).toBeDefined(null);
  // });
  // it('компонент должен иметь свойство categories co значением null', () => {
  //   expect((component as any).categories).toBeDefined(null);
  // });
});
