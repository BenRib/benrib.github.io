import { Component, OnInit, Input } from '@angular/core';

import { BlueprintElement } from '../../../administration.model';

@Component({
  selector: 'app-blueprint-element-detail',
  templateUrl: './blueprint-element-detail.component.html',
  styleUrls: ['./blueprint-element-detail.component.scss']
})
export class BlueprintElementDetailComponent implements OnInit {
  @Input() blueprintElement: BlueprintElement;

  constructor() { }

  ngOnInit() {
  }
}
