import { NgModule } from '@angular/core';

import { PackagesComponent } from './packages.component';
import { TripsComponent } from './trips.component';

import { PostRequestsRoutingModule } from './post-requests-routing.module';
import { PostRequestColis1Component } from './request/post-request-colis/post-request-colis1/post-request-colis1.component';
import { PostRequestColis3Component } from './request/post-request-colis/post-request-colis3/post-request-colis3.component';
import { PostRequestColis2Component } from './request/post-request-colis/post-request-colis2/post-request-colis2.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PostRequestTransport3Component } from './request/post-request-transport/post-request-transport3/post-request-transport3.component';

@NgModule({
  imports: [
    PostRequestsRoutingModule,
    MatTabsModule, ],
  declarations: [
    PackagesComponent,
    PostRequestTransport3Component,
    PostRequestColis3Component,
    // PostRequestColis2Component,
    // PostRequestColis3Component
  ]
})
export class PostRequestsModule { }
