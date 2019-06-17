import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
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
