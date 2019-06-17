import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DialogModule } from '../dialog/dialog.module';
import { DrawingModule } from '../drawing/drawing.module';

import { AdministrationRoutingModule } from './administration.routing';

import { OccasionsComponent } from './occasions/occasions.component';
import { OccasionDetailComponent } from './occasions/occasion-detail/occasion-detail.component';
import { OccasionSummaryComponent } from './occasions/occasion-summary/occasion-summary.component';
import { ExhibitorsComponent } from './exhibitors/exhibitors.component';
import { ExhibitorDetailComponent } from './exhibitors/exhibitor-detail/exhibitor-detail.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

import { OccasionsService } from './occasions/occasions.service';
import { ExhibitorsService } from './exhibitors/exhibitors.service';
import { RolesService } from './roles/roles.service';
import { UsersService } from './users/users.service';

import { OccasionDetailResolver } from './occasions/occasion-detail/occasion-detail.resolver';
import { ExhibitorDetailResolver } from './exhibitors/exhibitor-detail/exhibitor-detail.resolver';
import { BlueprintElementDetailComponent } from './occasions/occasion-detail/blueprint-element-detail/blueprint-element-detail.component';
import { UserDetailResolver } from './users/user-detail/user-detail.resolver';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatIconModule,
        MatInputModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatTooltipModule,
        DialogModule,
        DrawingModule,
        AdministrationRoutingModule
    ],
    declarations: [
        OccasionsComponent,
        OccasionDetailComponent,
        OccasionSummaryComponent,
        ExhibitorsComponent,
        ExhibitorDetailComponent,
        RolesComponent,
        BlueprintElementDetailComponent,
        UsersComponent,
        UserDetailComponent
    ],
    providers: [
        OccasionsService,
        ExhibitorsService,
        RolesService,
        UsersService,
        OccasionDetailResolver,
        ExhibitorDetailResolver,
        UserDetailResolver
    ]
})
export class AdministrationModule { }
