import { Routes } from '@angular/router';

import { PatientsComponent } from './patients/patients.component';
import { TriageComponent } from './triage/triage.component';

export const TriageRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PatientsComponent,
        data: {
          heading: 'Patients in Queue'
        }
      },
      {
        path: 'record',
        component: TriageComponent,
        data: {
          heading: 'Record Patient\'s vitals'
        }
      }
    ]
  }
];