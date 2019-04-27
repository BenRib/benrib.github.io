import { Component, Input } from '@angular/core';
import { Occasion } from '../../administration.model';

@Component({
  selector: 'app-occasion-summary',
  templateUrl: './occasion-summary.component.html',
  styleUrls: ['./occasion-summary.component.scss']
})
export class OccasionSummaryComponent {
  @Input() occasion: Occasion;

  constructor() { }
}
