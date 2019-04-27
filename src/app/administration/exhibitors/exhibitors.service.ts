import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

import { Exhibitor } from '../administration.model';

@Injectable()
export class ExhibitorsService {
    private exhibitors: Exhibitor[] = [
        { id: 0, name: 'painter', isActive: true },
        { id: 1, name: 'sculptor', isActive: false }
    ]

    constructor(httpClient: HttpClient) { }

    getAll(): Observable<Exhibitor[]> {
        return of(this.exhibitors);
    }

    getById(id: number): Observable<Exhibitor> {
        return of(this.exhibitors[id]);
    }

    save(exhibitor: Exhibitor): Observable<Exhibitor> {
        if (exhibitor.id !== null && exhibitor.id !== undefined) {
            let index = this.exhibitors.findIndex(o => o.id === exhibitor.id);
            this.exhibitors[index] = exhibitor;
        } else {
            exhibitor.id = this.exhibitors.length !== 0 ? this.exhibitors.reduce(function (prev, current) { return (prev.id > current.id) ? prev : current }).id + 1 : 0;
            this.exhibitors.push(exhibitor);
        }

        return of(exhibitor);
    }

    delete(id: number): Observable<boolean> {
        let index = this.exhibitors.findIndex(o => o.id === id);
        if (index !== -1) {
            this.exhibitors.splice(index, 1);
        }

        return of(true);
    }
}