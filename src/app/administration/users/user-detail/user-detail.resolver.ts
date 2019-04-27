import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';
import { User } from '../../administration.model';

@Injectable()
export class UserDetailResolver implements Resolve<User> {
    constructor(private service: UsersService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        return this.service.getById(parseInt(route.paramMap.get('id')));
    }
}