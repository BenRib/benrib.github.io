import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ExhibitorsService } from '../exhibitors.service';
import { Exhibitor } from '../../administration.model';

@Injectable()
export class ExhibitorDetailResolver implements Resolve<Exhibitor> {
    constructor(private service: ExhibitorsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Exhibitor> {
        return this.service.getById(parseInt(route.paramMap.get('id')));
    }
}