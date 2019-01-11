import { Routes } from '@angular/router';

import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';

export const DoctorsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'see-patient',
        component: DoctorsComponent,
        data: {
          heading: 'Treatment'
        }
      },
      {
        path: '',
        component: PatientsComponent,
        data: {
          heading: 'Patients in Queue'
        }
      }
    ]
  }
];