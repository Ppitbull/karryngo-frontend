// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { VehiclesComponent } from './vehicles/vehicles.component';

// Forms Component
import { SettingsComponent } from './settings/settings.component';

// Components Routing
import { CarrierRoutingModule } from './carrier-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarrierRoutingModule
  ],
  declarations: [
    VehiclesComponent,
    SettingsComponent
  ]
})
export class CarrierModule { }
