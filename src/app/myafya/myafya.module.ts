import { MyAfyaRoutes } from './myafya.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyafyalandingComponent } from './myafyalanding/myafyalanding.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MyAfyaRoutes),
  ],
  declarations: [MyafyalandingComponent]
})
export class MyafyaModule { }
