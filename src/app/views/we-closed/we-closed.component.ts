import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AppSettingsProps, AppSettings} from '../../../../blu-classes';

@Component({
  selector: 'blu-we-closed',
  templateUrl: './we-closed.component.html',
  styleUrls: ['./we-closed.component.css']
})
export class WeClosedComponent implements OnInit {

  constructor(public fireDb: AngularFireDatabase, public router: Router) { }

  public settings: FirebaseObjectObservable<AppSettings>;

  ngOnInit() {
    this.settings = this.fireDb.object(AppSettings.dbAddress);
  }
  

}
