import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Occasion, Exhibitor, Spot } from './organization.model';

@Injectable()
export class OrganizationService {
    private exhibitors: Exhibitor[] = [
        { id: 0, name: 'painter' },
        { id: 1, name: 'sculptor' },
        { id: 2, name: 'drawer' },
        { id: 3, name: 'musician' },
        { id: 4, name: 'artist' },
        { id: 5, name: 'singer' }
    ];
    private occasions: Occasion[] = [];

    constructor(httpClient: HttpClient) {
        let spots: Spot[] = [];
        let spot = new Spot();
        spot.number = 1;
        spot.assignedExhibitorId = 1;
        spot.assignedExhibitor = this.exhibitors[1];
        spots.push(spot);
        spot = new Spot();
        spot.number = 2;
        spot.assignedExhibitorId = 2;
        spot.assignedExhibitor = this.exhibitors[2];
        spots.push(spot);
        spot = new Spot();
        spot.number = 3;
        spots.push(spot);
        spot = new Spot();
        spot.number = 4;
        spots.push(spot);
        spot = new Spot();
        spot.number = 5;
        spots.push(spot);

        this.occasions = [
            { id: 0, name: '2018', blueprint: { elements: [] } },
            { id: 1, name: '2019', blueprint: { elements: [spots[0], spots[1], spots[2], spots[3], spots[4]] } }
        ];
    }

    getOccasions(): Observable<Occasion[]> {
        return of(this.occasions);
    }

    getOccasionById(id: number): Observable<Occasion> {
        let index = this.occasions.findIndex(o => o.id === id);
        return of(this.occasions[index]);
    }

    getExhibitors(): Observable<Exhibitor[]> {
        return of(this.exhibitors);
    }

    allocate(occasionId: number, spotNumber: number, exhibitorId: number): Observable<boolean> {
        let occasionIndex = this.occasions.findIndex(o => o.id === occasionId);
        if (occasionIndex !== -1) {
            let spot = <Spot>this.occasions[occasionIndex].blueprint.elements.find(e => (<Spot>e).number == spotNumber);
            if (spot) {
                spot.assignedExhibitorId = exhibitorId;
                spot.assignedExhibitor = this.exhibitors.find(e => e.id === exhibitorId);
            }
        }

        return of(true);
    }

    free(occasionId: number, spotNumber: number): Observable<boolean> {
        let occasionIndex = this.occasions.findIndex(o => o.id === occasionId);
        if (occasionIndex !== -1) {
            let spot = <Spot>this.occasions[occasionIndex].blueprint.elements.find(e => (<Spot>e).number == spotNumber);
            if (spot) {
                spot.assignedExhibitorId = null;
                spot.assignedExhibitor = null;
            }
        }

        return of(true);
    }
}