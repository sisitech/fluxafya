import { Routes } from '@angular/router';

import { FinanceComponent } from './finance/finance.component';
import { PatientsComponent } from './patients/patients.component';

export const FinanceRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FinanceComponent,
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