import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ImgUrlPipe } from './pipes/img-url.pipe';

@NgModule({
  declarations: [AppComponent, ProductCardComponent, ImgUrlPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
