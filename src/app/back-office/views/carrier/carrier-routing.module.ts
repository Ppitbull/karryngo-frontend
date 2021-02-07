import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclesComponent } from './vehicles/vehicles.component';
import { SettingsComponent } from './settings/settings.component';
import { BeProviderComponent } from './be-provider/be-provider.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Carrier'
    },
    children: [
      {
        path: '',
        redirectTo: 'be-carrier'
      },
      {
        path: 'be-carrier',
        component: BeProviderComponent,
        data: {
          title: 'Become carrier'
        }
      },
      {
        path: 'vehicles',
        component: VehiclesComponent,
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
export class CarrierRoutingModule {}
