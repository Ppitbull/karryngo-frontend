import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculsComponent } from './vehiculs.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Carrier'
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
export class CarrierRoutingModule {}
