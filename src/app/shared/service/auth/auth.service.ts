import { Injectable, ɵConsole } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api/api.service';
import { User } from '../../entity/user';
import { UserService } from '../user/user.service';
import { async } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static currentUser: User = new User();

  userData: User;
  isLoggedIn = false;
  authStatus: boolean;
  params: any;
  registResult = false;


  constructor(
    // private firebaseAuth: AngularFireAuth,
    private router: Router,
    private api: ApiService,
    private toastr: ToastrService,
    private user: UserService
  ) {

    // this.registResult = false;
    // this.loginResult = false;

  }


  /*
   *  Get local user profile data.
   */
  getLocalStorageUser() {
    this.userData = JSON.parse(localStorage.getItem('user-data') ? localStorage.getItem('user-data') : null);
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
    this.router.navigate(['/login']);
  }

  /*
   * logOut function is used to sign out .
   */
  logOut() {
    localStorage.removeItem('user-data');
    this.isLoggedIn = false;
    this.toastr.success('You have been successfully logged out!');
    this.router.navigate(['/login']);
  }



  /**
   *  Create an account on the drupal platform
   *
   */
  createAccount(data: User): Promise<any> {

    return new Promise((resolve, reject) => {

      const headers = {
        'Content-Type': 'application/json',
        // 'X-CSRF-Token': '97dKe-0-qukVOMY1YNBhsZ-POfPUArpL11YLfRJFD94',
        // 'Accept': 'application/json'
      };

      const params = {
        'firstname': data.field_firstName,
        'lastname': data.field_surName,
        'password': data.field_password,
        'address':
        {
          'email': data.field_email,
          'mobilePhone': data.field_contact,
          'whatAppNumber': data.field_whatsappContact,
          'country': data.field_country,
          'zip': data.field_contact,
          'skypeNumber': data.field_skype,
          'phone': data.field_phone,
          'websiteLink': data.field_websiteLink,
        },
        // 'userName': data.field_userName ,
        // 'country': data.field_country ,
        // 'city': data.field_city ,
        // 'type': data.field_accountType ,
        // 'email': data.field_email ,
      };

      this.api.post('auth/requester', JSON.stringify(params), headers)
        .subscribe((response: any) => {
          if (response) {
            if (response.resultCode === 0) {
              this.registResult = true;
              resolve(response);
              this.router.navigate(['login']);
              return;
            }
            reject(response);
            console.log('teste de la consol 2 ' + response);
            return 0;
          }
        }, (error: any) => {
          if (error) {
            this.registResult = false;
            this.toastr.error(error.message);
            // console.log('Error message: ', error.message);
            // reject(error);
          }
        });
    });

  }

  getAuthStatus(authStatus) {
    if (authStatus == 'true') {
      this.authStatus = true;
    } else {
      this.authStatus = false;
    }

  }

  // Login into your account
  authLogin(email?: string, password?: string): Promise<any> {
    const param = {
      'email': email,
      'password': password,
    };
    const header = {
      'Content-Type': 'application/json',
      // 'Accept': 'application/json'
    };

    return new Promise((resolve, reject) =>  {
      this.api.post('auth/login', param, header)
        .subscribe(response => {
          this.api.setAccessToken(response.result.token);
          this.user.userConnectedInformations()
          .then((data) => {
            // this.router.navigate(['dashboard']);
            // this.api.getAppToken();
            console.log('Data, ', data);
            // this.setUserInformations(data);
            // Check if the user data is available
            // if (this.getLocalStorageUser()) {
              this.router.navigate(['dashboard']);
              this.toastr.success('You have been successfully logged In!');
              resolve(response);

              // this.authUserInformations();
                // this.toastr.success('You have been successfully logged In!');
                // this.router.navigate(['dashboard']);
            // } else {

              // Get the user informations
              // this.authUserInformations().then(reponse => {
              //   this.toastr.success('You have been successfully logged In!');
              //   this.router.navigate(['dashboard']);
              // }).catch(error => {
              //   this.router.navigate(['dashboard']);
              // });
            //   reject(response);
            // }
          });
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

  authUserInformations(): Promise<any> {

    return new Promise((resolve, reject) => {

      const headers = {
        'Authorization': 'Bearer ' + this.api.getAccessToken(),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };

      this.api.get('requester/profil', headers)
        .subscribe((reponse: any) => {
          if (reponse) {
            resolve(reponse);
            this.user.setUserInformations(reponse);
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
