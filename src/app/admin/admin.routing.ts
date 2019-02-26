import { AddhealthcenterComponent } from './addhealthcenter/addhealthcenter.component';
import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { AdminLandingComponent } from '../admin-landing/admin-landing.component';
import { AdminSettingsComponent } from '../admin-settings/admin-settings.component';
import { AdminSuperLandingComponent } from '../admin-super-landing/admin-super-landing.component';

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
        path: 'see-healthcenter',
        component: AddhealthcenterComponent,
        data: {
          heading: 'Health Center'
        }
      },
      {
        path: 'landing',
        component: AdminLandingComponent,
        data: {
          heading: 'System Users'
        }
      },
      {
        path: 'settings',
        component: AdminSettingsComponent,
        data: {
          heading: 'Settings'
        }
      },
      {
        path: 'super-admin-landing',
        component: AdminSuperLandingComponent,
        data: {
          heading: 'Settings'
        }
      },
      {
        path: '**',
        component: RolesComponent,
        data: {
          heading: 'System Users'
        }
      },
      
    ]
  }
];