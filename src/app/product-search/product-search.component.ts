import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ProductProps, Product } from '../../../blu-classes';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css'],
  animations: [
    trigger('searchPosition', [
      state('searching', style({
        marginTop: '0px'
      })),
      state('resting', style({
        marginTop: '300px'
      })),
      transition('searching => resting', animate('300ms ease-in')),
      transition('resting => searching', animate('300ms ease-out'))
    ])
  ]
})
export class ProductSearchComponent implements OnInit {

  public state: string = 'resting';

  public searchText: string;
  public loading: boolean = false;

  public cartShowing: boolean = false;


  public productList

  constructor(public fireDb: AngularFireDatabase,public afAuth: AngularFireAuth, public router: Router, public cart: CartService) {}

  ngOnInit() {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (!user || user.isAnonymous == true) {
        this.router.navigate(['/login']); //forward to home
      }
    })


    this.productList = this.fireDb.list(Product.dbAddress, {
      query: {
        orderByChild: 'name',
        equalTo: this.searchText,
        limitToFirst: 2
      }
    });
  }

  onSearch(newModel: string) {
    this.searchText = newModel;
    if (!newModel) {
      this.state = 'resting';
      //   this.loading = false;
    } else {
      this.state = 'searching';
      //    this.loading = true;
    }
  }

}
