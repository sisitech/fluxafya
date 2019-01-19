import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';

export const AdminRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'manage-users',
        component: AdminComponent,
        data: {
          heading: 'Manage Users'
        }
      },
      {
        path: '**',
        component: RolesComponent,
        data: {
          heading: 'System Users'
        }
      }
    ]
  }
];