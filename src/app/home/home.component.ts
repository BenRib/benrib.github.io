import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Occasion } from './home.model';
import { min } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nextOccasion: Occasion;

  remainingDays: number;
  remainingHours: number;
  remainingMinutes: number;
  remainingSeconds: number;

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.service.getNextOccasion().subscribe(o => this.setNextOccasion(o));
  }

  private setNextOccasion(occasion: Occasion) {
    this.nextOccasion = occasion;
    setInterval(() => {
      let interval = this.nextOccasion.start.valueOf() - Date.now();
      let secondLength = 1000;
      let minuteLength = 60 * secondLength;
      let hourLength = 60 * minuteLength;
      let dayLength = 24 * hourLength;
      this.remainingDays = Math.floor(interval / dayLength);
      interval = interval - (this.remainingDays * dayLength);
      this.remainingHours = Math.floor(interval / hourLength);
      interval = interval - (this.remainingHours * hourLength);
      this.remainingMinutes = Math.floor(interval / minuteLength);
      interval = interval - (this.remainingMinutes * minuteLength);
      this.remainingSeconds = Math.floor(interval / secondLength);
    }, 1000);
  }
}
