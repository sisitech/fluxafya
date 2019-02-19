import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage.component';
import {LandingpageRoutes} from './landingpage.routing';
import { RouterModule, Router } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LandingpageRoutes)
  ],
  declarations: [LandingpageComponent]
})
export class LandingpageModule { }
