import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Role } from '../administration.model';

@Injectable()
export class RolesService {
  private roles: Role[] = [
    { id: 0, name: 'Admin', description: 'Can do everything', permissions: ['CanManageUsers', 'CanManageExhibitors', 'CanManageOccasions', 'CanAssignExhibitorToSpot'] },
    { id: 1, name: 'Organizer', description: 'Can assign an exhibitor to a spot', permissions: ['CanAssignExhibitorToSpot'] }
  ]
  private permissions: string[] = ['CanManageUsers', 'CanManageExhibitors', 'CanManageOccasions', 'CanAssignExhibitorToSpot', 'UnassignedPermission'];

  constructor(httpClient: HttpClient) { }

  getAll(): Observable<Role[]> {
    return of(this.roles);
  }

  getAllPermissions(): Observable<string[]> {
    return of(this.permissions);
  }

  save(role: Role): Observable<void> {
    if (role.id) {
      let index = this.roles.findIndex(r => r.id === role.id);
      this.roles[index] = role;
    } else {
      role.id = this.roles.length !== 0 ? this.roles.reduce(function (prev, current) { return (prev.id > current.id) ? prev : current }).id + 1 : 0;
      this.roles.push(role);
    }
    
    return of();
  }

  delete(id: number): Observable<void> {
    let index = this.roles.findIndex(r => r.id === id);
    if (index !== -1) {
      this.roles.splice(index, 1);
    }

    return of();
  }
}
