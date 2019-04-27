import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Occasion, Exhibitor, Spot } from './organization.model';

@Injectable()
export class OrganizationService {
    private spots: Spot[] = [
        {
            number: 1,
            assignedExhibitorId: 1,
            assignedExhibitor: null
        },
        {
            number: 2,
            assignedExhibitorId: 2,
            assignedExhibitor: null
        },
        {
            number: 3,
            assignedExhibitorId: null,
            assignedExhibitor: null
        },
        {
            number: 4,
            assignedExhibitorId: null,
            assignedExhibitor: null
        },
        {
            number: 5,
            assignedExhibitorId: null,
            assignedExhibitor: null
        }
    ];
    private occasions: Occasion[] = [
        { id: 0, name: '2018', blueprint: { elements: [] } },
        { id: 1, name: '2019', blueprint: { elements: [this.spots[0], this.spots[1], this.spots[2], this.spots[3], this.spots[4]] } }
    ];
    private exhibitors: Exhibitor[] = [
        { id: 0, name: 'painter' },
        { id: 1, name: 'sculptor' },
        { id: 2, name: 'drawer' },
        { id: 3, name: 'musician' },
        { id: 4, name: 'artist' },
        { id: 5, name: 'singer' }
    ];

    constructor(httpClient: HttpClient) { }

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
            }
        }

        return of(true);
    }
}