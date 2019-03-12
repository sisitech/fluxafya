import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { RegistrationComponent } from './registration/registration.component';
import { PatientsRoutes } from './patients.routing';
import { PatientsComponent } from './patients/patients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PatientsRoutes),
    NgbAccordionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrationComponent, PatientsComponent]
})
export class PatientsModule {}