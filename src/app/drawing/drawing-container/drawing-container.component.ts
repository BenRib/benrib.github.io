import { Component, OnInit, Input } from '@angular/core';
import { DrawingContainer } from '../drawing.model';

@Component({
  selector: 'app-drawing-container',
  templateUrl: './drawing-container.component.html',
  styleUrls: ['./drawing-container.component.scss']
})
export class DrawingContainerComponent implements OnInit {
  @Input() container: DrawingContainer;

  constructor() { }

  ngOnInit() {
  }

  getInPixels(value: number): string {
    return `${value}px`;
  }
}
