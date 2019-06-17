import { Directive, ViewContainerRef, TemplateRef, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthorizationService } from './authorization.service';
import { AuthenticationService } from '../authentication/authentication.service';

@Directive({
  selector: '[ngIfPermissions]'
})
export class NgIfPermissionsDirective implements OnDestroy {
  private hasView: boolean = false;
  private _permissions: string[];
  private loginSubscription: Subscription;

  constructor(authenticationService: AuthenticationService, private authorizationService: AuthorizationService, private viewContainer: ViewContainerRef, private templateRef: TemplateRef<Object>) {
    this.loginSubscription = authenticationService.loggedIn.subscribe(e => this.handleView());
  }

  @Input() set ngIfPermissions(permission: string | string[]) {
    this._permissions = [];
    if (typeof permission === "string") {
      this._permissions.push(permission);
    } else {
      this._permissions.push(...permission);
    }

    this.handleView();
  }

  ngOnDestroy() {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

  private handleView() {
    let matches = this._permissions.length <= 0 || this._permissions.some(p => this.authorizationService.hasPermission(p));
    if (matches && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!matches && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
