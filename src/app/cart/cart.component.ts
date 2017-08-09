import { Component, OnInit,Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(protected cart: CartService, protected router: Router) { }

  @Input() checkoutBtn: boolean = true;

  ngOnInit() {
  }

  checkout(){
    if(this.cart.orderItems.length > 0){
       this.router.navigate(['/checkout']);
    }
  }

}
