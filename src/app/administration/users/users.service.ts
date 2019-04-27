import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

import { User, Role } from '../administration.model';

@Injectable()
export class UsersService {
    private roles: Role[] = [
      { id: 0, name: 'Admin', description: 'Can do everything', permissions: [] },
      { id: 1, name: 'Organizer', description: 'Can assign an exhibitor to a spot', permissions: [] }
    ]
    private users: User[] = [
        { id: 0, firstName: 'Benjamin', lastName: 'Ribera', login: 'bribera', email: 'ribera.benjamin@gmail.com', role: this.roles[0], isActive: true },
        { id: 1, firstName: 'Abdessamad', lastName: 'Benmansour', login: 'abensamour', email: 'abdessamad_benmansour@yahoo.fr', role: this.roles[0], isActive: true },
        { id: 2, firstName: 'Parham', lastName: 'Zamiri', login: 'pzamiri', email: 'parham.zamiri@gmail.com', role: this.roles[1], isActive: true },
        { id: 3, firstName: 'François', lastName: 'Nagy', login: 'fnagy', email: 'nagy.francois@orange.fr ', role: this.roles[1], isActive: true },
        { id: 4, firstName: 'Alain', lastName: 'Kossak', login: 'akossak', email: 'alain.kossak@gmail.com', role: this.roles[1], isActive: true },
    ]

    constructor(httpClient: HttpClient) { }

    getAll(): Observable<User[]> {
        return of(this.users);
    }

    getRoles(): Observable<Role[]> {
        return of(this.roles);
    }

    getById(id: number): Observable<User> {
        return of(this.users[id]);
    }

    save(user: User): Observable<User> {
        if (user.id !== null && user.id !== undefined) {
            let index = this.users.findIndex(o => o.id === user.id);
            this.users[index] = user;
        } else {
            user.id = this.users.length !== 0 ? this.users.reduce(function (prev, current) { return (prev.id > current.id) ? prev : current }).id + 1 : 0;
            this.users.push(user);
        }

        return of(user);
    }

    delete(id: number): Observable<boolean> {
        let index = this.users.findIndex(o => o.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
        }

        return of(true);
    }
}