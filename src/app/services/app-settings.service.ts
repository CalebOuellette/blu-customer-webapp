import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AppSettingsProps, AppSettings } from '../../../blu-classes';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Injectable()
export class AppSettingsService {

  constructor(private fireDb: AngularFireDatabase, private router: Router) {
    this.settings = this.fireDb.object(AppSettings.dbAddress);
    this.settings.subscribe((data: AppSettingsProps) => {
      if (data.isOpen) {
        this.router.navigate(['/close']);
      }
    });
  }

  public settings: FirebaseObjectObservable<AppSettingsProps>;


}
