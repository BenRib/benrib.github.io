import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OccasionsRoutes } from './occasions/occasions.routing';
import { ExhibitorsRoutes } from './exhibitors/exhibitors.routing';
import { RolesRoutes } from './roles/roles.routing';
import { UsersRoutes } from './users/users.routing';


const routes: Routes = [
  {
    path: '',
    children: [
      ...OccasionsRoutes,
      ...ExhibitorsRoutes,
      ...RolesRoutes,
      ...UsersRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }