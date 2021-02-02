import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostRequestColisComponent } from './post-request-colis/post-request-colis.component';
import { PostRequestTripsComponent } from './post-request-trips/post-request-trips.component';

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
        component: PostRequestColisComponent,
        data: {
          title: 'Packages'
        }
      },
      {
        path: 'trips',
        component: PostRequestTripsComponent,
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
