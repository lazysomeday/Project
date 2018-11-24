import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AdminOnlyComponent } from './admin-only/admin-only.component';

const router: Routes = [
  { path: 'setting/edit-profile', component: EditProfileComponent },
  { path: 'setting/admin-only', component: AdminOnlyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class SettingRoutingModule {
}
export const SettingRoutingComponents = [EditProfileComponent, AdminOnlyComponent];
