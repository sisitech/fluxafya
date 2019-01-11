import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DoctorsRoutes } from './doctors.routing';

import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DoctorsRoutes)
  ],
  declarations: [DoctorsComponent, PatientsComponent]
})
export class DoctorsModule { }
