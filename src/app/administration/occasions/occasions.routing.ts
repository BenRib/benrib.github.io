import { Route } from '@angular/router';
import { OccasionsComponent } from './occasions.component';
import { OccasionDetailComponent } from './occasion-detail/occasion-detail.component';
import { OccasionDetailResolver } from './occasion-detail/occasion-detail.resolver';

export const OccasionsRoutes: Route[] = [
    {
        path: 'occasions',
        component: OccasionsComponent
    },
    {
        path: 'occasions/new',
        component: OccasionDetailComponent
    },
    {
        path: 'occasions/:id',
        component: OccasionDetailComponent,
        resolve: {
            occasion: OccasionDetailResolver
        }
    }
];