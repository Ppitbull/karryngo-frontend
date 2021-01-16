import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
        component: PackagesComponent,
        data: {
          title: 'Packages'
        }
      },
      {
        path: 'trips',
        component: TripsComponent,
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
