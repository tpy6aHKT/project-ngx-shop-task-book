import { ShopCardComponent } from './shop-card/shop-card.component';

import { ImgUrlPipe } from './pipe/img-url.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ShopCardComponent, ImgUrlPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
