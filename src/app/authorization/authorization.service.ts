import { Injectable } from '@angular/core';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private routePermissions: { [route: string]: string };

  constructor(private authenticationService: AuthenticationService) {
    this.routePermissions = {};
  }

  hasPermission(permission: string): boolean {
    return this.authenticationService.identifiedPerson !== undefined && this.authenticationService.identifiedPerson !== null;
  }

  hasPermissionToNavigate(route: string): boolean {
    let permission = this.routePermissions[route];
    return !permission || this.hasPermission(permission);
  }

  mapRouteToPermission(route: string, permission: string) {
    if (this.routePermissions[route]) {
      throw Error(`Route ${route} cannot be mapped more than once`);
    }

    this.routePermissions[route] = permission;
  }
}
