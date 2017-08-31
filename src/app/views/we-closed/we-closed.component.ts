import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'blu-we-closed',
  templateUrl: './we-closed.component.html',
  styleUrls: ['./we-closed.component.css']
})
export class WeClosedComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
     this.router.navigate(["coming-soon"]);
  }

}
