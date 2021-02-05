import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { VehiculsComponent } from './vehicles/vehiculs.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Trips'
    },
    children: [
      {
        path: '',
        redirectTo: 'vehicles'
      },
      {
        path: 'vehicles',
        component: VehiculsComponent,
        data: {
          title: 'Vehicles'
        }
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: {
          title: 'Settings'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsRoutingModule {}
