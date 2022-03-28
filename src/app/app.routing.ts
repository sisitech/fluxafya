import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './core';
import { AuthLayoutComponent } from './core';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'account/signin',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'email',
        loadChildren: './email/email.module#EmailModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'cards',
        loadChildren: './cards/cards.module#CardsModule'
      },
      {
        path: 'forms',
        loadChildren: './form/form.module#FormModule'
      },
      {
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
      },
      {
        path: 'datatable',
        loadChildren: './datatable/datatable.module#DatatableModule'
      },
      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
      },
      {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
      },
      {
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      },
      {
        path: 'taskboard',
        loadChildren: './taskboard/taskboard.module#TaskboardModule'
      },
      {
        path: 'calendar',
        loadChildren: './fullcalendar/fullcalendar.module#FullcalendarModule'
      },
      {
        path: 'media',
        loadChildren: './media/media.module#MediaModule'
      },
      {
        path: 'social',
        loadChildren: './social/social.module#SocialModule'
      },
      {
        path: 'docs',
        loadChildren: './docs/docs.module#DocsModule'
      },
      {
        path: 'patients',
        loadChildren: './patients/patients.module#PatientsModule'
      },
      {
        path: 'triage',
        loadChildren: './triage/triage.module#TriageModule'
      },
      {
        path: 'finance',
        loadChildren: './finance/finance.module#FinanceModule'
      },
      {
        path: 'doctors',
        loadChildren: './doctors/doctors.module#DoctorsModule'
      },
      {
        path: 'pharmacy',
        loadChildren: './pharmacy/pharmacy.module#PharmacyModule'
      },
      {
        path: 'myafya',
        loadChildren: './myafya/myafya.module#MyafyaModule'
      },
      {
        path: 'ext-patient',
        loadChildren: './ext-patient/ext-patient.module#ExtPatientModule'
      },
      {
        path: 'labs',
        loadChildren: './labs/labs.module#LabsModule'
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      },
      {
        path: 'profile',
        loadChildren: './social/social.module#SocialModule'
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'landing',
        loadChildren: './landingpage/landingpage.module#LandingpageModule'
      },
      {
        path: 'account',
        loadChildren: './account/account.module#AccountModule'
      },
      {
        path: 'error',
        loadChildren: './error/error.module#ErrorModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];
