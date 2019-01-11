import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PatientsComponent } from '../pharmacy/patients/patients.component';
import { RouterModule } from '@angular/router';

import { PharmacyRoutes } from './pharmacy.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PharmacyRoutes)
  ],
  declarations: [PharmacyComponent, PatientsComponent]
})
export class PharmacyModule { }
