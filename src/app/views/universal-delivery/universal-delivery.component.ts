import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { OrderItemProps } from '../../../../blu-classes';
@Component({
  selector: 'app-universal-delivery',
  templateUrl: './universal-delivery.component.html',
  styleUrls: ['./universal-delivery.component.css']
})
export class UniversalDeliveryComponent implements OnInit {

  public aOrderItem = new OrderItemProps();

  constructor(public fireDb: AngularFireDatabase, public router: Router, public cart: CartService) { }

  ngOnInit() {
    
  }


  addItemToCart() {
    this.cart.addOrderItem(this.aOrderItem);
    this.router.navigate(['/checkout']);
  }



}
