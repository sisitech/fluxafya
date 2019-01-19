import { AdminRoutes } from './admin.routing';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ],
  declarations: [RolesComponent, AdminComponent]
})
export class AdminModule { }
