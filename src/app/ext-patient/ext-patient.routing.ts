import { Routes } from '@angular/router';

import { ExtPatientComponent } from './ext-patient.component';

export const ExtPatientRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'history',
        component: ExtPatientComponent,
        data: {
          heading: 'Medical Prescription'
        }
      },
      {
        path: '**',
        component: ExtPatientComponent,
        data: {
          heading: 'Medical Prescription'
        }
      }
    ]
  }
];