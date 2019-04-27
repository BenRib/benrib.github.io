import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { OrganizationService } from '../organization.service';
import { Occasion } from '../organization.model';

@Injectable()
export class OccasionResolver implements Resolve<Occasion> {
    constructor(private service: OrganizationService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Occasion> {
        return this.service.getOccasionById(parseInt(route.paramMap.get('id')));
    }
}