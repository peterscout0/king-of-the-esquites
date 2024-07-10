import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UnderConstructionComponent } from './under-construction.component';

const routes: Routes = [
  { path: '', component: UnderConstructionComponent }
];

@NgModule({
  declarations: [UnderConstructionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UnderConstructionModule { }
