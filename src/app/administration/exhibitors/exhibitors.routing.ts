import { Route } from '@angular/router';
import { ExhibitorsComponent } from './exhibitors.component';
import { ExhibitorDetailComponent } from './exhibitor-detail/exhibitor-detail.component';
import { ExhibitorDetailResolver } from './exhibitor-detail/exhibitor-detail.resolver';
import { AuthenticationGuard } from 'src/app/authentication/authentication.guard';
import { AuthorizationGuard } from 'src/app/authorization/authorization.guard';

export const ExhibitorsRoutes: Route[] = [
    {
        path: 'exhibitors',
        component: ExhibitorsComponent,
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: { permissions: ['ExhibitorsCanRead'] }
    },
    {
        path: 'exhibitors/new',
        component: ExhibitorDetailComponent,
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: { permissions: ['ExhibitorsCanWrite'] }
    },
    {
        path: 'exhibitors/:id',
        component: ExhibitorDetailComponent,
        resolve: {
            exhibitor: ExhibitorDetailResolver
        },
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: { permissions: ['ExhibitorsCanWrite'] }
    }
];