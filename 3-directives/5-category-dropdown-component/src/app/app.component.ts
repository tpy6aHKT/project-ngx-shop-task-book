import { Component } from '@angular/core';
import { categories } from '../../../../shared/mocks/3-directives/categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public title = 'Компонент выбора категории товара';
  public categories = categories;
}
