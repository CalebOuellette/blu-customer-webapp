import { Component, OnInit,Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cart: CartService, public router: Router) { }

  @Input() public showingCart: boolean = false;

  ngOnInit() {
    this.showingCart = false;
  }

  checkout(){
    if(this.cart.orderItems.length > 0){
       this.router.navigate(['/checkout']);
    }
  }

  openCart(){
    this.showingCart = true;
  }

  closeCart(){
    this.showingCart = false;
  }


}
