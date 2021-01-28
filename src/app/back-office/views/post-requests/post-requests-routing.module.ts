import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostRequestColis1Component } from './request/post-request-colis/post-request-colis1/post-request-colis1.component';
import { PostRequestColis2Component } from './request/post-request-colis/post-request-colis2/post-request-colis2.component';
import { PostRequestColis3Component } from './request/post-request-colis/post-request-colis3/post-request-colis3.component';
import { PostRequestTransport3Component } from './request/post-request-transport/post-request-transport3/post-request-transport3.component';

import { PackagesComponent } from './packages.component';
import { TripsComponent } from './trips.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Post Requests'
    },
    children: [
      {
        path: '',
        redirectTo: 'packages'
      },
      {
        path: 'packages',
        component: PostRequestColis3Component,
        data: {
          title: 'Packages'
        }
      },
      // {
      //   path: 'transport-result',
      //   component: PostRequestColis2Component,
      //   data: {
      //     title: 'Transport Results'
      //   }
      // },
      // {
      //   path: 'submit-request',
      //   component: PostRequestColis3Component,
      //   data: {
      //     title: 'Submit your request'
      //   }
      // },
      // {
      //   path: 'packages',
      //   component: PackagesComponent,
      //   data: {
      //     title: 'Packages'
      //   }
      // },
      {
        path: 'trips',
        component: PostRequestTransport3Component,
        data: {
          title: 'Trips'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRequestsRoutingModule {}
