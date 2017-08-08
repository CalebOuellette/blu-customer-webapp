import { Injectable } from '@angular/core';
import { ProductProps } from '../../../blu-classes/product';
@Injectable()
export class CartService {

  constructor() { }

  public orderItems: Array<ProductProps> = [];

  public addProduct(product: ProductProps){
    this.orderItems.push(product);
  }

}
