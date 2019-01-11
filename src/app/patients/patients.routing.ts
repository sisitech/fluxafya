import { Routes } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';

export const PatientsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'registration',
        component: RegistrationComponent,
        data: {
          heading: 'Customer Registration'
        }
      },
    ]
  }
];