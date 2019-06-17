import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  resetPasswordForm = this.fb.group({
    old: [null, Validators.required],
    new: [null, Validators.required],
    confirmation: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private location: Location) { }

  reset(): void {
    this.authenticationService.resetPassword().subscribe(r => {
      if (r) {
        this.location.back();
      }
    });
  }
}
