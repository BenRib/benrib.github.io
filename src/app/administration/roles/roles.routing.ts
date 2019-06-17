import { Route } from '@angular/router';
import { RolesComponent } from './roles.component';
import { AuthenticationGuard } from 'src/app/authentication/authentication.guard';
import { AuthorizationGuard } from 'src/app/authorization/authorization.guard';

export const RolesRoutes: Route[] = [
    {
        path: 'roles',
        component: RolesComponent,
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: { permissions: ['RolesCanRead'] }
    }
];