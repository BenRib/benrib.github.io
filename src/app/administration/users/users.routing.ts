import { Route } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDetailResolver } from './user-detail/user-detail.resolver';
import { AuthenticationGuard } from 'src/app/authentication/authentication.guard';
import { AuthorizationGuard } from 'src/app/authorization/authorization.guard';

export const UsersRoutes: Route[] = [
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: { permissions: ['UsersCanRead'] }
    },
    {
        path: 'users/new',
        component: UserDetailComponent,
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: { permissions: ['UsersCanWrite'] }
    },
    {
        path: 'users/:id',
        component: UserDetailComponent,
        resolve: {
            user: UserDetailResolver
        },
        canActivate: [AuthenticationGuard, AuthorizationGuard],
        data: { permissions: ['UsersCanWrite'] }
    }
];