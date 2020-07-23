import { ReviewPipe } from './../shared/ review.pipe';
import { RatePipe } from '../shared/rate.pipe';
import { ImgUrlPipe } from '../shared/img-url.pipe';
import { CategoryProductComponent } from './product-card/product-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryProductComponent,
    ImgUrlPipe,
    RatePipe,
    ReviewPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
