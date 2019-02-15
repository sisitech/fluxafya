import { Routes } from '@angular/router';

import { AdminLandingComponent } from './admin-landing.component';

export const DoctorsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '**',
        component: AdminLandingComponent,
        data: {
          heading: 'Treatment'
        }
      },
    ]
  }
];