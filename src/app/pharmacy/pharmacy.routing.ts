import { Routes } from '@angular/router';

import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PatientsComponent } from './patients/patients.component';

export const PharmacyRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'record',
        component: PharmacyComponent,
        data: {
          heading: 'Medical Prescription'
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