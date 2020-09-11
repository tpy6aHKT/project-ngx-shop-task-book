import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { StarRatingComponent } from './product-card/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    StarRatingComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
