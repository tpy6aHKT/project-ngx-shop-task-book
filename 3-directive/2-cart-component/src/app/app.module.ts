import { CartProductComponent } from './cart-component/cart-product/cart-product.component';
import { RatePipe } from '../shared/rate.pipe';
import { ReviewPipe } from '../shared/review.pipe';
import { ImgUrlPipe } from '../shared/img-url.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartComponent } from './cart-component/cart.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CartProductComponent,
    ImgUrlPipe,
    ReviewPipe,
    RatePipe,
    CartComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
