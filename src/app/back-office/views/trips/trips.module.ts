import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TripsComponent } from './trips.component';
import { SettingsComponent } from './settings.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { VehiculsComponent } from './vehiculs.component';

// Trips Routing
import { TripsRoutingModule } from './trips-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    TripsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  declarations: [
    TripsComponent,
    VehiculsComponent,
    SettingsComponent
  ]
})
export class TripsModule { }
