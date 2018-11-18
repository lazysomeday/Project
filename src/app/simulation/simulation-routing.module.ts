import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Department1Component } from './department1/department1.component';
import { Department2Component } from './department2/department2.component';
import { Department3Component } from './department3/department3.component';

const router: Routes = [
  { path: 'department1', component: Department1Component},
  { path: 'department2', component: Department2Component},
  { path: 'department3', component: Department3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class SimulationRoutingModule {
}
export const SimulationRoutingComponents = [Department1Component, Department2Component, Department3Component];
