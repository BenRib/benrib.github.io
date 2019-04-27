import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { OrganizationService } from '../organization.service';
import { Occasion, Spot, Exhibitor } from '../organization.model';

@Component({
  selector: 'app-occasion',
  templateUrl: './occasion.component.html',
  styleUrls: ['./occasion.component.scss']
})
export class OccasionComponent implements OnInit {
  organizationForm = this.fb.group({
    spot: [null, Validators.required],
    exhibitor: [null, Validators.required]
  });

  occasion: Occasion;
  allocatedSpots: Spot[];
  freeSpots: Spot[];
  exhibitors: Exhibitor[];
  freeExhibitors: Exhibitor[];

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private service: OrganizationService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => this.loadOccasion(parseInt(p.get('id'))));
  }

  loadOccasion(occasionId: number): void {
    this.reset();
    this.service.getOccasionById(occasionId).subscribe(r => {
      this.occasion = r;
      this.setSpots(r.blueprint.elements.map(e => <Spot>e));
    });
    this.service.getExhibitors().subscribe(r => {
      this.exhibitors = r;
      if (this.freeSpots) {
        this.setExhibitors();
      }
    });
  }

  allocateSpot(spot: Spot, exhibitor: Exhibitor): void {
    this.service.allocate(this.occasion.id, spot.number, exhibitor.id).subscribe(r => this.loadOccasion(this.occasion.id));
  }

  freeSpot(spot: Spot): void {
    this.service.free(this.occasion.id, spot.number).subscribe(r => this.loadOccasion(this.occasion.id));
  }

  reset(): void {
    this.organizationForm.reset();
    this.allocatedSpots = [];
    this.freeSpots = [];
    this.exhibitors = [];
  }

  private setSpots(spots: Spot[]): void {
    this.allocatedSpots = spots.filter(s => s.assignedExhibitorId !== undefined && s.assignedExhibitorId !== null).sort((s1, s2) => s1.number < s2.number ? -1 : 1);
    this.freeSpots = spots.filter(s => s.assignedExhibitorId === undefined || s.assignedExhibitorId === null).sort((s1, s2) => s1.number < s2.number ? -1 : 1);

    if (this.exhibitors) {
      this.setExhibitors();
    }
  }

  private setExhibitors(): void {
    this.freeExhibitors = this.exhibitors.filter(e => this.allocatedSpots.every(s => s.assignedExhibitorId !== e.id)).sort((e1, e2) => e1.name.localeCompare(e2.name));
    this.allocatedSpots.forEach(s => s.assignedExhibitor = this.exhibitors.find(e => e.id === s.assignedExhibitorId));
  }
}
