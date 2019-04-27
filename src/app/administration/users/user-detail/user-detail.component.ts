import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';

import { DialogService } from '../../../dialog/dialog.service';
import { User, Role } from '../../administration.model';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userForm = this.fb.group({
    id: [null],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    role: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    login: [null, Validators.required],
    isActive: [true, Validators.required],
  });

  roles$: Observable<Role[]>;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private location: Location, private dialogService: DialogService, private service: UsersService) { }

  ngOnInit() {
    this.roles$ = this.service.getRoles();
    this.route.data
      .subscribe((data: { user: User }) => {
        if (data.user) {
          this.userForm.setValue(data.user);
        }
      });
  }

  save(user: User): void {
    this.service.save(user).subscribe(r => this.cancel());
  }

  delete(user: User): void {
    this.dialogService.confirm(`message-delete-user`, 'message-confirmation-title-delete')
      .pipe(filter(r => r))
      .pipe(switchMap(r => this.service.delete(user.id)))
      .subscribe(r => this.cancel());
  }

  cancel(): void {
    this.userForm.reset();
    this.location.back();
  }

  compareRoles(role1: Role, role2: Role): boolean {
    if ((role1 === null && role2 !== null) || (role1 !== null && role2 === null)) {
      return false;
    }

    return role1.id === role2.id;
  }
}
