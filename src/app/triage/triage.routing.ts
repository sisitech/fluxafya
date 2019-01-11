import { Routes } from '@angular/router';

import { PatientsComponent } from './patients/patients.component';
import { TriageComponent } from './triage/triage.component';

export const TriageRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'see-patient',
        component: TriageComponent,
        data: {
          heading: 'Record Patient\'s vitals'
        }
      },
      {
        path: '**',
        component: PatientsComponent,
        data: {
          heading: 'Patients in Queue'
        }
      }
    ]
  }
];