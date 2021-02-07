// Angular
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { VehiclesComponent } from './vehicles/vehicles.component';

// Forms Component
import { SettingsComponent } from './settings/settings.component';

// Components Routing
import { CarrierRoutingModule } from './carrier-routing.module';
import { ProgressIndeterminateModule } from '../../../shared/components/progress-indeterminate/progress-indeterminate.module';
import { BeProviderComponent } from './be-provider/be-provider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarrierRoutingModule,
    ProgressIndeterminateModule,
  ],
  declarations: [
    VehiclesComponent,
    SettingsComponent,
    BeProviderComponent
  ]
})
export class CarrierModule { }
