import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsRoutingModule } from './trips-routing.module';
import { TripsComponent } from './trips.component';
import { HttpClientModule } from '@angular/common/http';

import { ConfigService } from '../../services/config/config.service';
import { TripsPipesModule } from '../../pipes/trips-pipes.module';


@NgModule({
    declarations: [
      TripsComponent,
    ],
    imports: [
      CommonModule,
      TripsRoutingModule,
      HttpClientModule,
      TripsPipesModule
    ],
    exports: [
      TripsComponent,
    ],
    providers: [
      ConfigService,
    ],
  })
export class TripsModule { }

