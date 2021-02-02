import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { PackagesComponent } from './packages.component';

import { PostRequestsRoutingModule } from './post-requests-routing.module';
import { PostRequestColisComponent } from './post-request-colis/post-request-colis.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { PostRequestTripsComponent } from './post-request-trips/post-request-trips.component';
import { PostRequestColis0Component } from './post-request-colis/post-request-colis0/post-request-colis0.component';
import { PostRequestColis1Component } from './post-request-colis/post-request-colis1/post-request-colis1.component';
import { PostRequestColis2Component } from './post-request-colis/post-request-colis2/post-request-colis2.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostRequestsRoutingModule,
    MatTabsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    PackagesComponent,
    PostRequestColisComponent,
    PostRequestColis0Component,
    PostRequestColis1Component,
    PostRequestColis2Component,
    PostRequestTripsComponent
  ]
})
export class PostRequestsModule { }
