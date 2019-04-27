import { Route } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDetailResolver } from './user-detail/user-detail.resolver';

export const UsersRoutes: Route[] = [
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'users/new',
        component: UserDetailComponent
    },
    {
        path: 'users/:id',
        component: UserDetailComponent,
        resolve: {
            user: UserDetailResolver
        }
    }
];