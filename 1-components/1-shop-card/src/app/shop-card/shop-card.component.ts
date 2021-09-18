import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartProduct } from '../../../../../shared/mocks/1-components/cart-product';

@Component({
	selector: 'ngx-shop-shop-card',
	templateUrl: './shop-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopCardComponent {
	@Input()
	public product: ICartProduct = {} as ICartProduct;

	@Output()
	public increment: EventEmitter<void> = new EventEmitter<void>();

	@Output()
	public decrement: EventEmitter<void> = new EventEmitter<void>();

	public incrementProductInCart() {
		this.increment.emit();
	}

	public decrementProductInCart() {
		this.decrement.emit();
	}
}
