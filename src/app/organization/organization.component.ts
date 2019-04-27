import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganizationService } from './organization.service';
import { Occasion } from './organization.model';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  occasions$: Observable<Occasion[]>;

  constructor(private service: OrganizationService) { }

  ngOnInit() {
    this.occasions$ = this.service.getOccasions();
  }
}
