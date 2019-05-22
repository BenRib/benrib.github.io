import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.scss']
})
export class InputMessageComponent {
  @Input() tag: string;

  constructor() { }
}
