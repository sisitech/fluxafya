import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DoctorsRoutes } from './doctors.routing';

import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { ArchwizardModule } from 'angular-archwizard';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDemoModule } from '../components/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule,
    RouterModule.forChild(DoctorsRoutes),
    NgbModule,
    NgbdDemoModule
  ],
  declarations: [DoctorsComponent, PatientsComponent]
})
export class DoctorsModule { }
