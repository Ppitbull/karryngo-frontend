import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { PackagesComponent } from './packages.component';

import { PostRequestsRoutingModule } from './post-requests-routing.module';
import { PostRequestColisComponent } from './post-request-colis/post-request-colis/post-request-colis.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { PostRequestTripsComponent } from './post-request-trips/post-request-trips.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostRequestsRoutingModule,
    MatTabsModule, ],
  declarations: [
    PackagesComponent,
    PostRequestColisComponent,
    PostRequestTripsComponent
  ]
})
export class PostRequestsModule { }
