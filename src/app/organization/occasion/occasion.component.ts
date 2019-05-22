import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs';
import { flatMap, filter } from 'rxjs/operators';

import { OrganizationService } from '../organization.service';
import { Occasion, Spot, Exhibitor } from '../organization.model';
import { DialogService } from 'src/app/dialog/dialog.service';
import { SelectInput, SelectInputOption } from 'src/app/dynamic-form/dynamic-form.model';

@Component({
  selector: 'app-occasion',
  templateUrl: './occasion.component.html',
  styleUrls: ['./occasion.component.scss']
})
export class OccasionComponent implements OnInit {
  occasion: Occasion;
  filteredSpots: Spot[] = [];

  _filter: string;
  get filter(): string {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value ? value.trim() : undefined;
    this.applyFilter();
  }

  constructor(private route: ActivatedRoute, private service: OrganizationService, private dialogService: DialogService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => this.loadOccasion(parseInt(p.get('id'))));
  }

  loadOccasion(occasionId: number): void {
    this.service.getOccasionById(occasionId).subscribe(r => {
      this.occasion = r;
      this.resetFilter();
    });
  }

  allocateSpot(spot: Spot): void {
    this.service.getExhibitors()
      .pipe(flatMap(r => {
        let options = r.map(e => new SelectInputOption(`${e.id}`, e.name));
        let value = spot.assignedExhibitor ? `${spot.assignedExhibitor.id}` : null;
        let inputs = [new SelectInput({ key: 'exhibitor', i18nTag: 'input-select-exhibitor', value: value, options: options })];
        return this.dialogService.input(null, null, inputs);
      }))
      .pipe(filter(r => r))
      .pipe(flatMap((r: { exhibitor: string }) => this.service.allocate(this.occasion.id, spot.number, parseInt(r.exhibitor))))
      .subscribe(r => this.loadOccasion(this.occasion.id));
  }

  freeSpot(spot: Spot): void {
    this.service.free(this.occasion.id, spot.number).subscribe(r => this.loadOccasion(this.occasion.id));
  }

  applyFilter(): void {
    let spots = this.occasion.blueprint.elements
      .filter(e => e instanceof Spot)
      .map(e => <Spot>e);

    if (this.filter && this.filter !== '') {
      spots = spots.filter(s => `${s.number}`.includes(this.filter) || (s.assignedExhibitor && s.assignedExhibitor.name.includes(this.filter)));
    }

    this.filteredSpots = spots;
  }

  resetFilter(): void {
    this.filter = undefined;
    this.applyFilter();
  }
}
