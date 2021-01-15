import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
// import { TripsComponent } from '../trips/trips.component';
import { ServicesComponent } from '../services/services.component';
// import { ChatsComponent } from '../chats/chats.component';
import { RequestsComponent } from '../requests/requests.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    // { path: 'trips', component: TripsComponent },
    { path: 'services', component: ServicesComponent },
    // { path: 'chats', component: ChatsComponent },
    { path: 'requests', component: RequestsComponent },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }
];
