import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { OccasionsService } from '../occasions.service';
import { Occasion } from '../../administration.model';

@Injectable()
export class OccasionDetailResolver implements Resolve<Occasion> {
    constructor(private service: OccasionsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Occasion> {
        return this.service.getById(parseInt(route.paramMap.get('id')));
    }
}