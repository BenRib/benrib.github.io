import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private redirectUrl: string;
  loginForm = this.fb.group({
    login: [null, Validators.required],
    password: [null, Validators.required]
  });
  loginFailed: boolean;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
      .queryParamMap
      .subscribe(params => this.redirectUrl = params.get('redirectUrl'));
  }

  login() {
    this.loginFailed = false;
    this.authenticationService.login().subscribe(r => {
      this.loginFailed = !r
      if (!this.loginFailed) {
        this.router.navigate([this.redirectUrl || '/']);
      }
    });
  }

  passwordForgotten() {

  }
}
