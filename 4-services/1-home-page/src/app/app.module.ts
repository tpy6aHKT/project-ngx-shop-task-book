import { InterceptorService } from './services/interceptor/interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './home-page/header/header.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { SideMenuComponent } from './home-page/side-menu/side-menu.component';
import { ProductCardComponent } from './home-page/product-card/product-card.component';
import { ProductsService } from './services/products/products.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BASE_URL } from './services/interceptor/config';
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ProductCardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [
        ProductsService,
        {
          provide: BASE_URL,
          useValue: environment.baseUrl,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true,
        },
      ],
    };
  }
}
