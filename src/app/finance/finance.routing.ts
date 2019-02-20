import { Routes } from '@angular/router';

import { FinanceComponent } from './finance/finance.component';
import { PatientsComponent } from './patients/patients.component';

export const FinanceRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'see-patient',
        component: FinanceComponent,
        data: {
          heading: 'CASHIER'
        }
      },
      {
        path: '**',
        component: PatientsComponent,
        data: {
          heading: 'PATIENTS IN QUEUE'
        }
      }
    ]
  }
];