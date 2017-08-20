import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { LocationProps, Location, Product, ProductProps } from '../../../../blu-classes';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(public fireDb: AngularFireDatabase, private route: ActivatedRoute, public router: Router, public cart: CartService) { }

  public location: LocationProps;

  public menuItems: FirebaseListObservable<ProductProps[]>;

  public locationID: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.locationID = params['id'];

        this.fireDb.object(Location.dbAddress + '/' + this.locationID).subscribe((data) => {
          this.location =data;
        });
        this.menuItems = this.fireDb.list(Product.dbAddress, {
          query: {
            orderByChild: 'locationID',
            equalTo: this.locationID
          }
        });

      } else {
        this.router.navigate["home"];
      }
    });
  }


  addItemToCart(aProduct: ProductProps) {
    this.cart.addProduct(aProduct, this.location);
  }


}
