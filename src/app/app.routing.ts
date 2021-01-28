import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './back-office/views/error/404.component';
import { P500Component } from './back-office/views/error/500.component';
// import { LoginComponent } from './views/login/login.component';
// import { RegisterComponent } from './views/register/register.component';


/// Front Office
import { WelcomeComponent } from './front-office/welcome/welcome.component';
import { UserRegistrationComponent } from './front-office/user-registration/user-registration/user-registration.component';
import { HowDoesItWorkComponent } from './front-office/how-does-it-work/how-does-it-work.component';
import { RequestsComponent } from './front-office/requests/requests.component';
import { AboutUsComponent } from './front-office/about-us/about-us.component';
import { ForgotPasswordComponent } from './front-office/forgot-password/forgot-password.component';
import { ViewTripCarrierShipmentComponent } from './front-office/view-trip/view-trip-carrier-shipment/view-trip-carrier-shipment.component';
import { ViewTripTransportPersonsComponent } from './front-office/view-trip/view-trip-transport-persons/view-trip-transport-persons.component';
import { RegisterCarrierShipperTransporterComponent } from './front-office/registration/register-carrier-shipper-transporter/register-carrier-shipper-transporter.component';
import { LoginComponent } from './front-office/login/login.component';
import { RegisterComponent } from './front-office/register/register.component';



// Shared
import { BlankPageComponent } from './shared/blank-page/blank-page.component';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './shared/components/terms-and-conditions/terms-and-conditions.component';
import { TestPagesComponent } from './test-pages/test-pages.component';


//// Back Office
import { TripsModule } from './back-office/users/trips/trips.module';
import { PostTripCarrierShipper1Component } from './back-office/users/trips/post-trip-carrier-shipper/post-trip-carrier-shipper1/post-trip-carrier-shipper1.component';
import { PostTripCarrierShipper2Component } from './back-office/users/trips/post-trip-carrier-shipper/post-trip-carrier-shipper2/post-trip-carrier-shipper2.component';
import { PostTripTransport1Component } from './back-office/users/trips/post-trip-transport1/post-trip-transport1.component';
import { ProfileCarrierBusinessComponent } from './back-office/users/profile/profile-carrier-business/profile-carrier-business.component';
import { ProfileCarrierComponent } from './back-office/users/profile/profile-carrier/profile-carrier.component';
import { ProfileNormalUserComponent } from './back-office/users/profile/profile-normal-user/profile-normal-user.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'test',
    component: TestPagesComponent
  },
  {
    path: 'how-does-it-work',
    component: HowDoesItWorkComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'index',
    component: WelcomeComponent
  },
  {
    path: 'view-trip-carrier-shipment',
    component: ViewTripCarrierShipmentComponent
  },
  {
    path: 'view-trip-transport-of-person',
    component: ViewTripTransportPersonsComponent
  },
  {
    path: 'registration',
    component: RegisterCarrierShipperTransporterComponent
  },
  {
    path: 'profie-carrier',
    component: ProfileCarrierComponent
  },
  {
    path: 'profie-carrier-business',
    component: ProfileCarrierBusinessComponent
  },
  {
    path: 'profie-normal-user',
    component: ProfileNormalUserComponent
  },
  {
    path: 'user-registration',
    component: UserRegistrationComponent
  },
  {
    path: 'trips',
    loadChildren: () => import('./back-office/users/trips/trips.module')
      .then(mod => mod.TripsModule)
  },
  {
    path: 'requests',
    component: RequestsComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'post-trip-carrier-shipper-1',
    component: PostTripCarrierShipper1Component
  },
  {
    path: 'post-trip-carrier-shipper-2',
    component: PostTripCarrierShipper2Component
  },
  {
    path: 'post-trip-transport',
    component: PostTripTransport1Component
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'carrier',
        loadChildren: () => import('./back-office/views/carrier/carrier.module').then(m => m.CarrierModule)
      },
      {
        path: 'trips',
        loadChildren: () => import('./back-office/views/trips/trips.module').then(m => m.TripsModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./back-office/views/chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./back-office/views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'post-requests',
        loadChildren: () => import('./back-office/views/post-requests/post-requests.module').then(m => m.PostRequestsModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('./back-office/views/profil/profil.module').then(m => m.ProfilModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('./back-office/views/wallet/wallet.module').then(m => m.WalletModule)
      },
      {
        path: 'map',
        loadChildren: () => import('./back-office/views/map/map.module').then(m => m.MapModule)
      }
    ]
  },
  {
    path: '**',
    component: BlankPageComponent
  },
  {
    path: 'blanck',
    component: BlankPageComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
