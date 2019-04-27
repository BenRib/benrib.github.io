import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Occasion } from './home.model';

@Injectable()
export class HomeService {
    private occasions: Occasion[] = [
        { name: '2018', description: 'First occasion of the Quai des Arts festival', start: new Date(2018, 8, 9, 10, 0, 0), finish: new Date(2018, 8, 9, 19, 0, 0), imageSource: 'http://www.assoc-etoile-malraux.fr/images/stories/mes_images/affiche%20quai%20des%20arts%20draft%202019.jpg' },
        { name: '2019', description: 'Occasion to come soon...', start: new Date(2019, 8, 8, 10, 0, 0), finish: new Date(2019, 8, 8, 19, 0, 0), imageSource: 'http://www.assoc-etoile-malraux.fr/images/stories/mes_images/affiche%20quai%20des%20arts%20draft%202019.jpg' }
    ]

    constructor(httpClient: HttpClient) { }

    getNextOccasion(): Observable<Occasion> {
        return of(this.occasions.sort((a, b) => a.start < b.start ? 1 : -1)[0]);
    }
}