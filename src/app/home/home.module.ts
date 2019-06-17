import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { AgmCoreModule } from '@agm/core';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatCardModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyA3Pc9yVJpSZpTA533X-I91iGadbSBdrVI' })
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
