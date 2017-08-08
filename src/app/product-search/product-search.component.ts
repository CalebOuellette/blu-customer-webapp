import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {  AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database';
import { ProductProps, Product } from '../../../blu-classes';
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


  public productList

  constructor(public fireDb: AngularFireDatabase,) { }

  ngOnInit() {

    this.productList = this.fireDb.list(Product.dbAddress, {
      query: {
        orderByChild: 'name',
        equalTo: this.searchText,
        limitToFirst: 2
      }
    });
  }

  onSearch(newModel: string){    
    this.searchText = newModel;
    if(!newModel){
      this.state = 'resting';
   //   this.loading = false;
    }else{
      this.state = 'searching';
  //    this.loading = true;
    }
  }

}
