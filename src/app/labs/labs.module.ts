import { LabRoutes } from './labs.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabsComponent } from './labs.component';
import { RouterModule } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LabRoutes),
  ],
  declarations: [LabsComponent, PatientsComponent]
})
export class LabsModule { }
