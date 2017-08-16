import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrderProps, CustomerProps } from '../../../../blu-classes';
import { Router } from '@angular/router';
import { emailMask } from 'text-mask-addons';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  //Payment
  public cardNumber: string;
  public expiryMonth: string;
  public expiryYear: string;
  public cvc: string;

  public message: string;


  //Customer Info
  public customer: CustomerProps = new CustomerProps();
  public order: OrderProps = new OrderProps();

  public deliveryLocation: string = "";


  constructor(public fireDb: AngularFireDatabase, private _zone: NgZone, public cart: CartService, public router: Router) { }

  ngOnInit() {
    if (this.cart.orderItems.length < 1) {
      this.router.navigate(['/home']);
    }
  }

  public aEmailMask = emailMask;

  public aPhoneMask = function (rawValue) {
    // add logic to generate your mask array
    return ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  }

  

  getToken() {
    this.message = 'Loading...';

    (<any>window).Stripe.card.createToken({
      number: this.cardNumber,
      exp_month: this.expiryMonth,
      exp_year: this.expiryYear,
      cvc: this.cvc
    }, (status: number, response: any) => {

      // Wrapping inside the Angular zone
      this._zone.run(() => {
        if (status === 200) {
          this.message = `Success! Card token ${response.card.id}.`;
        } else {
          this.message = response.error.message;
        }
      });
    });
  }


  confirmOrder(){

  }

}
