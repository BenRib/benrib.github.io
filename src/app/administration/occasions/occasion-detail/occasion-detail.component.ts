import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';

import { Occasion, BlueprintElement, Spot } from '../../administration.model';
import { OccasionsService } from '../occasions.service';
import { DrawingContainer } from 'src/app/drawing/drawing.model';
import { DialogService } from 'src/app/dialog/dialog.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-occasion-detail',
  templateUrl: './occasion-detail.component.html',
  styleUrls: ['./occasion-detail.component.scss']
})
export class OccasionDetailComponent implements OnInit {
  occasionForm = this.fb.group({
    id: [null],
    name: [null, Validators.required],
    start: [null, Validators.required],
    finish: [null, Validators.required],
    description: [null, Validators.maxLength(500)],
    imageSource: [null, Validators.required],
    numberOfSpots: [null, Validators.required],
    blueprint: [null]
  });

  drawingContainer: DrawingContainer = {
    width: 300,
    height: 300,
    isEditable: true,
    elements: []
  };

  selectedBlueprintElement: BlueprintElement;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private location: Location, private dialogService: DialogService, private service: OccasionsService) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { occasion: Occasion }) => {
        if (data.occasion) {
          this.occasionForm.setValue(data.occasion);
        }
      });
  }

  save(occasion: Occasion): void {
    this.service.save(occasion).subscribe(r => this.cancel());
  }

  delete(occasion: Occasion): void {
    this.dialogService.confirm(`message-delete-occasion`, 'message-confirmation-title-delete')
      .pipe(filter(r => r))
      .pipe(switchMap(r => this.service.delete(occasion.id)))
      .subscribe(r => this.cancel());
  }

  cancel(): void {
    this.occasionForm.reset();
    this.location.back();
  }

  addElement(): void {
    let element = new Spot();

    this.selectedBlueprintElement = element;

    this.drawingContainer.elements.push({ width: 50, height: 50, positionX: 0, positionY: 0, content: 'new', isEditable: true, isSelectable: true });
  }
}
