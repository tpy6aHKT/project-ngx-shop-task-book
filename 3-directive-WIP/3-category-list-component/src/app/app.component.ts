import { categoriesMock } from './../../../../shared/mocks/categories.mock';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public title = 'Компонент списка категорий';
  public terminalMessage: any = '';
  public categories = categoriesMock;
}
