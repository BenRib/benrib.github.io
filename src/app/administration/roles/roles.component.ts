import { Component, OnInit } from '@angular/core';
import { filter, switchMap } from 'rxjs/operators';
import { Role } from '../administration.model';
import { RolesService } from './roles.service';
import { DialogService } from '../../dialog/dialog.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  permissions: string[];
  roles: Role[];
  isInitCompleted: boolean;

  constructor(private service: RolesService, private dialogService: DialogService) { }

  ngOnInit() {
    this.isInitCompleted = false;
    this.service.getAllPermissions().subscribe(p => this.setPermissions(p));
    this.service.getAll().subscribe(r => this.setRoles(r));
  }

  private setPermissions(permissions: string[]): void {
    this.permissions = permissions;
    this.completeInit();
  }

  private setRoles(roles: Role[]): void {
    this.roles = roles;
    this.completeInit();
  }

  private completeInit(): void {
    this.isInitCompleted = this.permissions && this.roles ? true : false;
  }

  addRole(): void {
    this.dialogService.input('message-add-role', 'message-role-name')
      .pipe(filter(name => name !== undefined))
      .pipe(switchMap((name: string) => {
        let role = new Role();
        role.name = name;
        return this.service.save(role);
      }))
      .subscribe(r => this.ngOnInit());
  }

  updateRole(role: Role): void {
    this.dialogService.input('message-update-role', 'message-role-name', role.name)
      .pipe(filter(name => name !== undefined))
      .pipe(switchMap((name: string) => {
        role.name = name;
        return this.service.save(role);
      }))
      .subscribe(r => this.ngOnInit());
  }

  deleteRole(role: Role) {
    this.dialogService.confirm(`message-delete-role`, 'message-confirmation-title-delete')
      .pipe(filter(r => r))
      .pipe(switchMap(r => this.service.delete(role.id)))
      .subscribe(() => this.ngOnInit());
  }
}
