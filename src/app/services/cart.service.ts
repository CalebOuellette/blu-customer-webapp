import { Injectable } from '@angular/core';
import { ProductProps, OrderItemProps, LocationProps } from '../../../blu-classes';
@Injectable()
export class CartService {

  constructor() { }

  public orderItems: Array<OrderItemProps> = [];

  public total: number;

  public addProduct(product: ProductProps, location: LocationProps){
    var x = new OrderItemProps();
    x.name = product.name;
    x.price = product.price;
    x.description = product.description;
    x.locationDescription = location.name;
    this.orderItems.push(x);
    this.total = this.total + Number.parseFloat(product.price);
  }

  public addOrderItem(aOrderItem: OrderItemProps){
    this.orderItems.push(aOrderItem);
    if(aOrderItem.price){
      this.total = this.total + Number.parseFloat(aOrderItem.price);
    }
  }

}
