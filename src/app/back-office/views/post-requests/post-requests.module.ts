import { NgModule } from '@angular/core';

import { PackagesComponent } from './packages.component';
import { TripsComponent } from './trips.component';

import { PostRequestsRoutingModule } from './post-requests-routing.module';

@NgModule({
  imports: [ PostRequestsRoutingModule ],
  declarations: [
    PackagesComponent,
    TripsComponent
  ]
})
export class PostRequestsModule { }
