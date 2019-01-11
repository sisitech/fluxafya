import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { RegistrationComponent } from './registration/registration.component';
import { PatientsRoutes } from './patients.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PatientsRoutes),
    NgbAccordionModule
  ],
  declarations: [RegistrationComponent]
})
export class PatientsModule {}