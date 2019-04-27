import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Occasion } from '../administration.model';

@Injectable()
export class OccasionsService {
    private occasions: Occasion[] = [
        { id: 0, name: '2018', description: 'First occasion of the Quai des Arts festival', start: new Date(2018, 8, 9, 10, 0, 0), finish: new Date(2018, 8, 9, 19, 0, 0), imageSource: 'http://www.assoc-etoile-malraux.fr/images/stories/Quai_des_Arts/Capture_Affiche_Quai_des_Arts_2019_proof.jpg', blueprint: null, numberOfSpots: 20 },
        { id: 1, name: '2019', description: 'Occasion to come soon...', start: new Date(2019, 8, 8, 10, 0, 0), finish: new Date(2019, 8, 8, 19, 0, 0), imageSource: 'http://www.assoc-etoile-malraux.fr/images/stories/Quai_des_Arts/Capture_Affiche_Quai_des_Arts_2019_proof.jpg', blueprint: null, numberOfSpots: 25 }
    ]

    constructor(httpClient: HttpClient) { }

    getAll(): Observable<Occasion[]> {
        return of(this.occasions);
    }

    getById(id: number): Observable<Occasion> {
        let index = this.occasions.findIndex(o => o.id === id);
        return of(this.occasions[index]);
    }

    save(occasion: Occasion): Observable<boolean> {
        if (occasion.id) {
            let index = this.occasions.findIndex(o => o.id === occasion.id);
            this.occasions[index] = occasion;
        } else {
            occasion.id = this.occasions.length !== 0 ? this.occasions.reduce(function (prev, current) { return (prev.id > current.id) ? prev : current }).id + 1 : 0;
            this.occasions.push(occasion);
        }

        return of(true);
    }

    delete(id: number): Observable<boolean> {
        let index = this.occasions.findIndex(o => o.id === id);
        if (index !== -1) {
            this.occasions.splice(index, 1);
        }

        return of(true);
    }
}