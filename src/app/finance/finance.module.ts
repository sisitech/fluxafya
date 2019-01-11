import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceComponent } from './finance/finance.component';
import { PatientsComponent } from './patients/patients.component';

import { RouterModule } from '@angular/router';

import { FinanceRoutes } from './finance.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FinanceRoutes)
  ],
  declarations: [FinanceComponent, PatientsComponent]
})
export class FinanceModule { }
