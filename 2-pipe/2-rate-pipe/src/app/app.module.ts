import { RatePipe } from '../shared/rate.pipe';
import { CategoryProductComponent } from './product-card/product-card.component';
import { ImgUrlPipe } from './../../../1-image-url-pipe/solution/img-url.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, CategoryProductComponent, ImgUrlPipe, RatePipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
