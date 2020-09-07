import { ReviewPipe } from './../shared/review.pipe';
import { RatePipe } from './../shared/rate.pipe';
import { ImgUrlPipe } from './../shared/img-url.pipe';
import { ProductCardComponent } from './home/product-card/product-card.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCardComponent,
    ImgUrlPipe,
    RatePipe,
    ReviewPipe,
    ProductCardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
