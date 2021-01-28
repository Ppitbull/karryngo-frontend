import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { VehiculsComponent } from './vehiculs.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Trips'
    },
    children: [
      {
        path: '',
        redirectTo: 'vehiculs'
      },
      {
        path: 'vehiculs',
        component: VehiculsComponent,
        data: {
          title: 'Vehiculs'
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
