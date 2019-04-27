import { Route } from '@angular/router';
import { ExhibitorsComponent } from './exhibitors.component';
import { ExhibitorDetailComponent } from './exhibitor-detail/exhibitor-detail.component';
import { ExhibitorDetailResolver } from './exhibitor-detail/exhibitor-detail.resolver';

export const ExhibitorsRoutes: Route[] = [
    {
        path: 'exhibitors',
        component: ExhibitorsComponent
    },
    {
        path: 'exhibitors/new',
        component: ExhibitorDetailComponent
    },
    {
        path: 'exhibitors/:id',
        component: ExhibitorDetailComponent,
        resolve: {
            exhibitor: ExhibitorDetailResolver
        }
    }
];