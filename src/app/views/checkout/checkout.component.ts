import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrderProps, CustomerProps, Customer, Order, OrderItem } from '../../../../blu-classes';
import { Router } from '@angular/router';
import { emailMask } from 'text-mask-addons';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  //Payment
  public cardNumber: string;
  public expiryMonth: string;
  public expiryYear: string;
  public cvc: string;

  public message: string;

  public selectedPaymentType: string = "";
  //Customer Info
  public customer: CustomerProps = new CustomerProps();
  public order: OrderProps = new OrderProps();

  public deliveryLocation: string = "";

  private itemsToSave: number;
  public saving: boolean = false;

  @ViewChild('infoForm') infoForm;

  constructor(public fireDb: AngularFireDatabase, private _zone: NgZone, public cart: CartService, public router: Router) { }

  ngOnInit() {
    if (this.cart.orderItems.length < 1) {
      this.router.navigate(['/home']);
    }
  }

  public aEmailMask = emailMask;

  public aPhoneMask = function (rawValue) {
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


 

  public confirmOrder() {
    this.itemsToSave = this.cart.orderItems.length;
    this.saving = true;
    this.fireDb.list(Customer.dbAddress).push(this.customer).then((customerSuccess) => {
      this.order.customerID = customerSuccess.key;
      this.order.paymentType = this.selectedPaymentType;
      this.order.to = this.deliveryLocation;
      this.order.orderTime = new Date().getTime();
      this.order.createdBy = "blu-customer-webapp";
      this.order.createdDate = new Date().getTime();
      this.fireDb.list(Order.dbAddress).push(this.order).then((orderSuccess) => {
        this.cart.orderItems.forEach((value) => {
          value.orderID = orderSuccess.key;
          this.fireDb.list(OrderItem.dbAddress).push(value).then((orderItemSuccess) => {
            this.aSaveCompleted();
          }, fail => {
            console.warn("Error Creating Order Item");
            this.saveFailed();
          });
        });

      }, fail => {
        console.warn("Error Creating Order");
        this.saveFailed();
      });
    }, fail => {
      this.saveFailed();
      console.warn("Error Creating Customer");
    });

  }

  private aSaveCompleted(){
    this.itemsToSave--;
    if(this.itemsToSave == 0){      
      this.saving = false;
      this.cart.orderItems = [];
      this.router.navigate(["review"]);
    }
  }

  private saveFailed(){    
    this.saving = false;
  }


}
