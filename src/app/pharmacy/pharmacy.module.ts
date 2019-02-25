import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PatientsComponent } from '../pharmacy/patients/patients.component';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDemoModule } from '../components/ng-bootstrap';

import { PharmacyRoutes } from './pharmacy.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PharmacyRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbdDemoModule
  ],
  declarations: [PharmacyComponent, PatientsComponent]
})
export class PharmacyModule { }
