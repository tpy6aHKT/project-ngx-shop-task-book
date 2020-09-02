import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
// @ts-ignore
export class AppComponent {
  public terminalMessage: string;
  public title = '1. Интерполяция и связывание. footer';

  public goToBasket() {
    this.terminalMessage = 'Переход на страницу карзины';
  }
}
