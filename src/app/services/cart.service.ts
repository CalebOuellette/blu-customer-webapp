import { Injectable } from '@angular/core';
import { ProductProps } from '../../../blu-classes/product';
@Injectable()
export class CartService {

  constructor() { }

  public orderItems: Array<ProductProps> = [];

  public total: number = 3.5;

  public addProduct(product: ProductProps){
    this.orderItems.push(product);
    this.total = this.total + Number.parseFloat(product.price);
  }

}
