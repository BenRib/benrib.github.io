import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AuthenticationService } from './authentication.service';
import { AuthenticationGuard } from './authentication.guard';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication.routing';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard
  ]
})
export class AuthenticationModule { }
