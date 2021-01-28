import { Injectable } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api/api.service';


interface User {

  links_self: string;
  links_type: string;
  uid: string;
  uuid: string;
  langCode: string;
  name: string;
  default_langcode: string;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {


 userData: any;
 isLoggedIn = false;

   constructor(
     //private firebaseAuth: AngularFireAuth,
     private router: Router,
     private api: ApiService,
     private toastr: ToastrService
  ) {

  }

    /*
    *  Set the user informations.
    */
   setUserInformations (user: any) {
        localStorage.setItem('user-data', JSON.stringify(user));
        this.isLoggedIn = true;
   }


     /*
    *  get the user informations.
    */
   getUserInformations() {
      return JSON.parse(localStorage.getItem('user-data'));
   }


   /*
    *  Get local user profile data.
    */
   getLocalStorageUser() {
      this.userData = JSON.parse(localStorage.getItem('user-data')?localStorage.getItem('user-data'):null);
      if (this.userData) {
         this.isLoggedIn = true;
         return true;
      } else {
         this.isLoggedIn = false;
         return false;
      }
   }

   /*
    * resetPassword is used to reset your password.
    */
   resetPassword() {
      this.toastr.success('Email Sent');
      this.router.navigate(['/session/loginone']);
   }

   /*
    * logOut function is used to sign out .
    */
   logOut() {
      localStorage.removeItem('user-data');
      this.isLoggedIn = false;
      this.toastr.success('You have been successfully logged out!');
      this.router.navigate(['/session/loginone']);
   }



   /**
    *  Create an account on the drupal platform
    *
    */
  authCreateAccount(data: any): Promise <any> {

    return new Promise ((resolve, reject) => {

    const params  = {
      '_links' : {
        'type' : {
          'href' : `${this.api.url}/rest/type/user/user`
        }
      },
      'name' : [{'value' : data.name}],
      'mail' : [{'value' : data.email}],
      'pass' : [{'value' : data.password}]
    }


    const headers = {
      'Content-Type': 'application/hal+json',
      'X-CSRF-Token': '97dKe-0-qukVOMY1YNBhsZ-POfPUArpL11YLfRJFD94',
      'Accept': 'application/json'
    };

    this.api.post('user/register?_format=hal_json',  JSON.stringify(params), headers).subscribe((reponse: any) => {
      if (reponse) {
        resolve(reponse);
        localStorage.setItem('user-secret', JSON.stringify(params.pass[0].value));
        this.setUserInformations(reponse);
      }

    }, (error: any) => {
    if (error) {
      this.toastr.success(error.message);
      reject(error);
    }
    });
  });

  }


    // Login into your account
    authLogin(username ?: string, password ?: string ): Promise<any> {
      console.log('username is ' + username);
      console.log('password is ' + password);
      const params = new URLSearchParams();

      params.append('grant_type', 'password');
      params.append('client_id', '8a4f8634-4f16-4b6e-b617-554664897bbe');
      params.append('client_secret', 'sdkgames2015');
      params.append('username', 'colombo');
      params.append('password', 'colombo_password');

      const header = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      };

      return new Promise((resolve, reject) => {
        this.api.post('oauth/token', params.toString(), header).subscribe(success => {
          resolve(success);
          //console.log(success);
          this.api.setAccessToken(success.access_token);
          this.api.setRefreshToken(success.refresh_token);
          this.api.getAppToken();

          // Check if the user data is available
          if (this.getLocalStorageUser()) {
            this.router.navigate(['/']);
            this.toastr.success('You have been successfully logged In!');
          } else {

              // Get the user informations
              this.authUserInformations().then(reponse => {
                  this.toastr.success('You have been successfully logged In!');
                  this.router.navigate(['/']);
              }).catch(error => {
                    this.router.navigate(['/']);
              });
          }

        }, error => {
          this.toastr.success('You have failed to logged In!');
          reject(error);

          if (error && error.error === 'invalid_grant') {
              this.toastr.success('Invalid credentials ! Please check your informations and try again.');
          }

        });
      });
     }


   /**
    *  Get the user informations
    */

  authUserInformations(): Promise <any> {

    return new Promise ((resolve, reject) => {

        const headers = {
          'Authorization' : 'Bearer ' + this.api.getAccessToken(),
          'Content-Type': 'application/hal+json',
          'Accept': 'application/json'
        };

        this.api.get('api/v01/user/connected?_format=hal_json', headers).subscribe((reponse: any) => {
          if (reponse) {
            resolve(reponse);
            this.setUserInformations(reponse);
          }

        }, (error: any) => {

        if (error) {
            this.toastr.success(error.message);
            reject(error);
        }
        });
  });

}
}
