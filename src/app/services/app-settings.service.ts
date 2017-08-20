import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AppSettingsProps, AppSettings } from '../../../blu-classes';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppSettingsService {

  constructor(public fireDb: AngularFireDatabase, ) {
    this.settings =  this.fireDb.object(AppSettings.dbAddress);
  }

  public settings: FirebaseObjectObservable<AppSettingsProps>;
  

}
