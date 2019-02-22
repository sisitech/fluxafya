import { AddhealthcenterComponent } from './addhealthcenter/addhealthcenter.component';
import { AdminRoutes } from './admin.routing';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import { RouterModule } from '@angular/router';
import { AdminLandingComponent } from '../admin-landing/admin-landing.component';
import { AdminSettingsComponent } from '../admin-settings/admin-settings.component';
import { AdminSuperLandingComponent } from '../admin-super-landing/admin-super-landing.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ],
  declarations: [RolesComponent, AdminComponent, AdminLandingComponent, AddhealthcenterComponent, AdminSettingsComponent, AdminSuperLandingComponent]
})
export class AdminModule { }
