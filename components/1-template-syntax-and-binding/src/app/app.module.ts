import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImgUrlPipe } from './pipes/img-url.pipe';
import { AppComponent } from './app.component';
import { ShopCardComponent } from './shop-card/shop-card.component';

@NgModule({
  declarations: [AppComponent, ShopCardComponent, ImgUrlPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
