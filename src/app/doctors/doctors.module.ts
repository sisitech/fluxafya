import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DoctorsRoutes } from './doctors.routing';

import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { ArchwizardModule } from 'angular-archwizard';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDemoModule } from '../components/ng-bootstrap';
import { FormModule } from '../form/form.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule,
    RouterModule.forChild(DoctorsRoutes),
    NgbModule,
    NgbdDemoModule,
    FormModule,
    ReactiveFormsModule
  ],
  declarations: [DoctorsComponent, PatientsComponent]
})
export class DoctorsModule { }
