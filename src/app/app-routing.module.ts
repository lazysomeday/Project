import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { SettingComponent } from './setting/setting.component';
import { SimulationComponent } from './simulation/simulation.component';

const router: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: PagesComponent },
  { path: 'setting', component: SettingComponent},
  { path: 'simulation', component: SimulationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
