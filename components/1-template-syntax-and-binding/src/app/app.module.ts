import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '../../solution/app/app.component';
import { ShopCardComponent } from '../../solution/app/shop-card/shop-card.component';
import { ImgUrlPipe } from './pipes/img-url.pipe';

@NgModule({
  declarations: [AppComponent, ShopCardComponent, ImgUrlPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
