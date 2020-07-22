import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
// @ts-ignore
export class AppComponent {
  public title = '1. Пайпы';
  public terminalMessage: string;
  public increment() {
    this.terminalMessage = 'Увеличение количества товара';
  }
  public remove() {
    this.terminalMessage = 'Убрать товара из корзины';
  }
  public decrement() {
    this.terminalMessage = 'Уменьшение количества товара';
  }
}
