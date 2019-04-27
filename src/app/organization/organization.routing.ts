import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizationComponent } from './organization.component';
import { OccasionComponent } from './occasion/occasion.component';
import { OccasionResolver } from './occasion/occasion.resolver';

const routes: Routes = [
    {
        path: '',
        component: OrganizationComponent
    },
    {
        path: ':id',
        component: OccasionComponent,
        resolve: { occasion: OccasionResolver }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrganizationRoutingModule { }