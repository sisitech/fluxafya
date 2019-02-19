import { LabsComponent } from './labs.component';
import { Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';

export const LabRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'see-patient',
        component: LabsComponent,
        data: {
          heading: "Lab's Form"
        }
      },{
        path: '**',
        component: PatientsComponent,
        data: {
          heading: 'LAB'
        }
      }
    ]
  }
];