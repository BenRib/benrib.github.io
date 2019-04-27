import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { OrganizationComponent } from './organization.component';
import { OccasionResolver } from './occasion/occasion.resolver';
import { OccasionComponent } from './occasion/occasion.component';
import { OrganizationRoutingModule } from './organization.routing';
import { OrganizationService } from './organization.service';

@NgModule({
  declarations: [
    OrganizationComponent,
    OccasionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    OrganizationRoutingModule
  ],
  providers: [
    OccasionResolver,
    OrganizationService
  ]
})
export class OrganizationModule { }
