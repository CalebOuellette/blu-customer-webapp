import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Location, LocationProps } from '../../../../blu-classes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public fireDb: AngularFireDatabase, public router: Router) { }

  public locations: FirebaseListObservable<any>;

  public loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    this.locations = this.fireDb.list(Location.dbAddress, {
      query: {
        orderByChild: 'partnered',
        equalTo: true
      }
    });

    this.locations.subscribe((data) => {
      this.loading = false;
    });
  }


  orderNow(location: string) {
    if (location === "everythingElse") {
      //go to everything page.
    } else if (location) {
      //go to notEverything page.
    }
  }


}
