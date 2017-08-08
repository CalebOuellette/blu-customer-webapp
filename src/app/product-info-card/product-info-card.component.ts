import { Component, Input } from '@angular/core';
import { ProductProps } from '../../../blu-classes/product';
@Component({
  selector: 'app-product-info-card',
  templateUrl: './product-info-card.component.html',
  styleUrls: ['./product-info-card.component.css']
})
export class ProductInfoCardComponent {

  @Input() public product: ProductProps;
  public quanity: number = 1;

  constructor() { }

  

  addToCart(){
    
  }

}
