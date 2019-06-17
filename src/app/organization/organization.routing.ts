import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizationComponent } from './organization.component';
import { OccasionComponent } from './occasion/occasion.component';
import { OccasionResolver } from './occasion/occasion.resolver';
import { AuthenticationGuard } from '../authentication/authentication.guard';
import { AuthorizationGuard } from '../authorization/authorization.guard';

const routes: Routes = [
    {
        path: '',
        component: OrganizationComponent,
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: { permissions: ['SpotCanAssign'] }
    },
    {
        path: ':id',
        component: OccasionComponent,
        resolve: { occasion: OccasionResolver },
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: { permissions: ['SpotCanAssign'] }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrganizationRoutingModule { }