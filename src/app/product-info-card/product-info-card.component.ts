import { Component, Input } from '@angular/core';
import { ProductProps } from '../../../blu-classes/product';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product-info-card',
  templateUrl: './product-info-card.component.html',
  styleUrls: ['./product-info-card.component.css']
})
export class ProductInfoCardComponent {

  @Input() public product: ProductProps;
  public quanity: number = 1;

  constructor(protected cart: CartService) { }

  

  addItemToCart(){
    this.cart.addProduct(this.product);
  }

}
