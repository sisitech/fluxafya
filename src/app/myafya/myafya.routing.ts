import { MyafyalandingComponent } from './myafyalanding/myafyalanding.component';
import { Routes } from '@angular/router';



export const MyAfyaRoutes: Routes = [
  {
    path: '',
    children: [
    //   {
    //     path: 'see-patient',
    //     component: PharmacyComponent,
    //     data: {
    //       heading: 'Medical Prescription'
    //     }
    //   },
      {
        path: '**',
        component: MyafyalandingComponent,
        data: {
          heading: 'My Afya'
        }
      }
    ]
  }
];