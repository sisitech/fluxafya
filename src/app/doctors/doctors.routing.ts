import { Routes } from '@angular/router';

import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';

export const DoctorsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DoctorsComponent,
        data: {
          heading: 'Patients in Queue'
        }
      },
      {
        path: 'record',
        component: PatientsComponent,
        data: {
          heading: 'Patients'
        }
      }
    ]
  }
];