import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { OrganizationComponent } from './organization.component';
import { OccasionResolver } from './occasion/occasion.resolver';
import { OccasionComponent } from './occasion/occasion.component';
import { OrganizationRoutingModule } from './organization.routing';
import { OrganizationService } from './organization.service';
import { DialogModule } from '../dialog/dialog.module';

@NgModule({
  declarations: [
    OrganizationComponent,
    OccasionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    DialogModule,
    OrganizationRoutingModule
  ],
  providers: [
    OccasionResolver,
    OrganizationService
  ]
})
export class OrganizationModule { }
