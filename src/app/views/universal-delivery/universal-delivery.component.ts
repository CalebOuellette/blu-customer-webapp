import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
@Component({
  selector: 'app-universal-delivery',
  templateUrl: './universal-delivery.component.html',
  styleUrls: ['./universal-delivery.component.css']
})
export class UniversalDeliveryComponent implements OnInit {

  constructor(public fireDb: AngularFireDatabase, public router: Router, public cart: CartService) { }

  ngOnInit() {
  }

}
