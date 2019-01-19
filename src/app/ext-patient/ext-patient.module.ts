import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtPatientComponent } from './ext-patient.component';
import { ExtPatientRoutes } from './ext-patient.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ExtPatientRoutes)
  ],
  declarations: [ExtPatientComponent]
})
export class ExtPatientModule { }
