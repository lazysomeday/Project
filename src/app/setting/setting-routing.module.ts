import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const router: Routes = [
  { path: 'setting/edit-profile', component: EditProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class SettingRoutingModule {
}
export const SettingRoutingComponents = [EditProfileComponent];
