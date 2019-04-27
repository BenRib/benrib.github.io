import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';

import { DialogService } from '../../../dialog/dialog.service';
import { Exhibitor } from '../../administration.model';
import { ExhibitorsService } from '../exhibitors.service';

@Component({
  selector: 'app-exhibitor-detail',
  templateUrl: './exhibitor-detail.component.html',
  styleUrls: ['./exhibitor-detail.component.scss']
})
export class ExhibitorDetailComponent implements OnInit {
  exhibitorForm = this.fb.group({
    id: [null],
    name: [null, Validators.required],
    isActive: [true, Validators.required],
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private location: Location, private dialogService: DialogService, private service: ExhibitorsService) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { exhibitor: Exhibitor }) => {
        if (data.exhibitor) {
          this.exhibitorForm.setValue(data.exhibitor);
        }
      });
  }

  save(exhibitor: Exhibitor): void {
    this.service.save(exhibitor).subscribe(r => this.cancel());
  }

  delete(exhibitor: Exhibitor): void {
    this.dialogService.confirm(`message-delete-exhibitor`, 'message-confirmation-title-delete')
      .pipe(filter(r => r))
      .pipe(switchMap(r => this.service.delete(exhibitor.id)))
      .subscribe(r => this.cancel());
  }

  cancel(): void {
    this.exhibitorForm.reset();
    this.location.back();
  }
}
