import { Routes } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { PatientsComponent } from './patients/patients.component';

export const PatientsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'registration',
        component: RegistrationComponent,
        data: {
          heading: 'Patient Registration'
        }
      },
      {
        path: '',
        component: PatientsComponent,
        data: {
          heading: 'Patients'
        }
      }
    ]
  }
];