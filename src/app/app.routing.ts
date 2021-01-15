import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
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
import { PostRequest1Component } from './back-office/users/request/post-request1/post-request1.component';
import { PostRequestColis1Component } from './back-office/users/request/post-request-colis/post-request-colis1/post-request-colis1.component';
import { PostRequestColis2Component } from './back-office/users/request/post-request-colis/post-request-colis2/post-request-colis2.component';
import { PostRequestColis3Component } from './back-office/users/request/post-request-colis/post-request-colis3/post-request-colis3.component';
import { PostRequestTransport1Component } from './back-office/users/request/post-request-transport/post-request-transport1/post-request-transport1.component';
import { PostRequestTransport2Component } from './back-office/users/request/post-request-transport/post-request-transport2/post-request-transport2.component';
import { PostRequestTransport3Component } from './back-office/users/request/post-request-transport/post-request-transport3/post-request-transport3.component';
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
    path: 'post-request',
    component: PostRequest1Component
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'post-request-colis-1',
    component: PostRequestColis1Component
  },
  {
    path: 'post-request-colis-2',
    component: PostRequestColis2Component
  },
  {
    path: 'post-request-colis-3',
    component: PostRequestColis3Component
  },
  {
    path: 'post-request-transport-1',
    component: PostRequestTransport1Component
  },
  {
    path: 'post-request-transport-2',
    component: PostRequestTransport2Component
  },
  {
    path: 'post-request-transport-3',
    component: PostRequestTransport3Component
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
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
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
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
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
