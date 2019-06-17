import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authenticationService.identifiedPerson) { return true; }

    // Pass the attempted URL for redirecting
    let navigationExtras: NavigationExtras = {
      queryParams: { redirectUrl: state.url }
    };

    // Navigate to the login page
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }
}
