import { Route } from '@angular/router';
import { OccasionsComponent } from './occasions.component';
import { OccasionDetailComponent } from './occasion-detail/occasion-detail.component';
import { OccasionDetailResolver } from './occasion-detail/occasion-detail.resolver';
import { AuthenticationGuard } from 'src/app/authentication/authentication.guard';
import { AuthorizationGuard } from 'src/app/authorization/authorization.guard';

export const OccasionsRoutes: Route[] = [
    {
        path: 'occasions',
        component: OccasionsComponent,
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: { permissions: ['OccasionsCanRead'] }
    },
    {
        path: 'occasions/new',
        component: OccasionDetailComponent,
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: { permissions: ['OccasionsCanWrite'] }
    },
    {
        path: 'occasions/:id',
        component: OccasionDetailComponent,
        resolve: {
            occasion: OccasionDetailResolver
        },
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: { permissions: ['OccasionsCanWrite'] }
    }
];