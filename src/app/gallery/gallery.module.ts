import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery.routing';
import { GalleryService } from './gallery.service';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    MatCardModule,
    GalleryRoutingModule
  ],
  providers: [GalleryService]
})
export class GalleryModule { }
