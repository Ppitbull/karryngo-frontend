import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Router} from "@angular/router";
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    url = 'http://localhost:8080';

    constructor(private http: HttpClient, 
                private router: Router, 
                private userService: UserService
                ) { }

    register(data) {
        this.http.post(`${this.url}/api/user/new`, data)
        .subscribe(
            res => {
                console.log(res['status']);
                if(res['status'] == "exists"){
                    alert(res['message']);
                    return
                } else{
                    alert('Account created. use the code we sent you by email to activate your account');
                    this.router.navigate(['/login']);
                }                
            },
            err => {
                if(err.error.status == "exists"){
                    alert(err.error.message);
                    return
                }
                console.log(err.error);
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    update(data, user_id) {
        this.http.put(`${this.url}/api/user/update/`+user_id, data)
        .subscribe(
            res => {
                console.log(res);
                alert('profile successfully updated.'+ 'Success');
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    login(data){
        console.log(data);
        return this.http.post(`${environment.apiUrl}/login/check`, data)
        .subscribe(
            res => {
                console.log(res);
                if(res['status'] != "success"){
                    alert('Icorrect email or password');
                } else{
                    console.log(res['user']._id);
                    this.userService.getByLoginID(res['user']._id)
                    .subscribe(
                        res => {
                            console.log(res);
                            console.log('data retreived successfully.', 'Success');
                            localStorage.setItem('currentUser', JSON.stringify(res['data']));
                            localStorage.setItem('isLoggedin', 'true');
                            console.log(localStorage.getItem('currentUser'));
                            this.router.navigate(["/home"]);
                        },
                        err => {
                            console.log('Error occured:' , err);
                            console.log(err.message, 'Error occured');
                        }
                    );
                }
                
            },
            err => {
                console.log('Error occured:' , err);
                alert(err.error.message);
            }
        );
    }

    changePass(data){
        return this.http.put(`${environment.apiUrl}/login/update`, data)
        .subscribe(
            res => {
                console.log(res);
                    // console.log(res['user']._id);
                    // this.userService.getByUserID(res['user']._id)
                    // .subscribe(
                    //     res => {
                    //         console.log(res);
                    //         console.log('data retreived successfully.', 'Success');
                    //         localStorage.setItem('currentUser', JSON.stringify(res['data']));
                    //         localStorage.setItem('isLoggedin', 'true');
                    //         console.log(localStorage.getItem('currentUser'));
                    //         this.router.navigate(["/home"]);
                    //     },
                    //     err => {
                    //         console.log('Error occured:' , err);
                    //         console.log(err.message, 'Error occured');
                    //     }
                    // );
            },
            err => {
                console.log('Error occured:' , err);
                alert(err.error.message);
            }
        );
    }

    activate(data){
        this.http.post(`${environment.apiUrl}/login/activateAccount`, data)
        .subscribe(
            res => {
                console.log(res);
                if(res['status'] == "activated"){
                    alert(res['message']);
                    let loginData ={
                        emailOrPhone: res['data'].email,
                        password: res['data'].password
                    }
                    this.login(loginData);
                } else{
                    alert('User not found');
                }
                // console.log('Votre matière a été créer avec succès.', 'Success');
            },
            err => {
                alert('User not found');
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    sendForgottenMail(email){
        this.http.get(`${environment.apiUrl}/login/sendForgottenMail/`+ email)
        .subscribe(
            res => {
                console.log(res);
                if(res['status'] == "success"){
                    alert(res['message']);
                    this.router.navigate(["/home"]);
                } else{
                    alert(res['message']);
                }
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    recoverPassword(data){
        this.http.post(`${environment.apiUrl}/login/recoverPassword`, data)
        .subscribe(
            res => {
                console.log(res);
                if(res['status'] == "error"){
                    alert("couldn't complete your request, please make sure the url is correct");
                }
                if(res['status'] == "reset"){
                    alert(res['message']);
                    this.router.navigate(["/login"]);
                }
            },
            err => {
                alert("couldn't complete your request, please make sure the url is correct");
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    logout(){
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedin');
        this.router.navigate(["/home"]);
    }
}
