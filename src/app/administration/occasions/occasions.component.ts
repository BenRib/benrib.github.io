import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Occasion } from '../administration.model';
import { OccasionsService } from './occasions.service';

@Component({
    selector: 'app-occasions',
    templateUrl: './occasions.component.html',
    styleUrls: ['./occasions.component.scss']
})
export class OccasionsComponent implements OnInit {
    occasions$: Observable<Occasion[]>;

    constructor(private service: OccasionsService) { }

    ngOnInit() {
        this.occasions$ = this.service.getAll();
    }
}
