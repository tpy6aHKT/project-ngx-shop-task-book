import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFeedback } from '../../../../../../shared/mocks/3-directives/product-information';

@Component({
  selector: 'ngx-shop-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.sass'],
})
export class FeedbacksComponent {
  @Input()
  public feedbacks!: IFeedback[];
  @Output()
  public addFeedback: EventEmitter<string> = new EventEmitter<string>();
  public addNewFeedback(): void {
    this.addFeedback.emit('отзыв добавлен');
  }
}
