// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { VehiculsComponent } from './vehiculs.component';

// Forms Component
import { SettingsComponent } from './settings.component';

// Components Routing
import { CarrierRoutingModule } from './carrier-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarrierRoutingModule
  ],
  declarations: [
    VehiculsComponent,
    SettingsComponent
  ]
})
export class CarrierModule { }
