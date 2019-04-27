import { Component, OnInit, Input } from '@angular/core';
import { DrawingElement } from '../drawing.model';

@Component({
  selector: 'app-drawing-element',
  templateUrl: './drawing-element.component.html',
  styleUrls: ['./drawing-element.component.scss']
})
export class DrawingElementComponent implements OnInit {
  @Input() element: DrawingElement;

  constructor() { }

  ngOnInit() {
  }

  getInPixels(value: number): string {
    return `${value}px`;
  }
}
