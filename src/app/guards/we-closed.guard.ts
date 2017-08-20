import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppSettingsService } from '../services/app-settings.service';
import { AppSettingsProps } from '../../../blu-classes';
@Injectable()
export class WeClosedGuard implements CanActivate {

  constructor(private app: AppSettingsService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((success, fail) => {
      this.app.settings.subscribe((data: AppSettingsProps) => {
        if (data.isOpen) {
          success(true);
        } else {
          this.router.navigate(['/login']);
          success(false);
        }
      });
    });

  }
}
