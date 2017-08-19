import { Injectable } from '@angular/core';
import { ProductProps, OrderItemProps } from '../../../blu-classes';
@Injectable()
export class CartService {

  constructor() { }

  public orderItems: Array<OrderItemProps> = [];

  public total: number = 3.5;

  public addProduct(product: ProductProps){
    var x = new OrderItemProps();
    x.name = product.name;
    x.price = product.price;
    x.description = product.description;
    this.orderItems.push(x);
    this.total = this.total + Number.parseFloat(product.price);
  }

}
