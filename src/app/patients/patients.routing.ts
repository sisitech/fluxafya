import { Routes } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { PatientsComponent } from './patients/patients.component';

export const PatientsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        component: RegistrationComponent,
        data: {
          heading: 'Patient Registration'
        }
      },
      {
        path: '**',
        component: PatientsComponent,
        data: {
          heading: 'Patients'
        }
      }
    ]
  }
];