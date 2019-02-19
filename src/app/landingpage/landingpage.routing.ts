import { LandingpageComponent } from './landingpage.component';
import { Routes } from '@angular/router';

export const LandingpageRoutes: Routes = [
  {
    path: '',
    children: [
        {
          path: '**',
          component: LandingpageComponent,
          data: {
            heading: 'Landing page'
          }
        },
      ]
  }
// tslint:disable-next-line:eofline
];