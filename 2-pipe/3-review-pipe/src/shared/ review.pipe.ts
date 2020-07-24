import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'review',
})
export class ReviewPipe implements PipeTransform {
  public transform(countOfReviews: number | undefined): void {}
}
