import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { TriageComponent } from './triage/triage.component';
import { PatientsComponent } from './patients/patients.component';

import { TriageRoutes } from './triage.routing';

@NgModule({
  imports: [
    CommonModule,
    NgbAccordionModule,
    RouterModule.forChild(TriageRoutes)
  ],
  declarations: [TriageComponent, PatientsComponent]
})
export class TriageModule { }
