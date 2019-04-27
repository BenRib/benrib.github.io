import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GalleryService } from './gallery.service';
import { Occasion } from './gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  occasions$: Observable<Occasion[]>;

  constructor(private service: GalleryService) { }

  ngOnInit() {
    this.occasions$ = this.service.getOccasions();
  }
}
