import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationService } from './authorization.service';
import { AuthorizationGuard } from './authorization.guard';
import { NgIfPermissionsDirective } from './ng-if-permissions.directive';

@NgModule({
  declarations: [
    NgIfPermissionsDirective
  ],
  exports: [
    NgIfPermissionsDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthorizationService,
    AuthorizationGuard
  ]
})
export class AuthorizationModule { }
