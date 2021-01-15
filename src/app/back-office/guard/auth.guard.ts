import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/back-office/_models/user';

function myFunction(f: string) {
    alert("Hello! Only an administrator can access this! " + f);
}

@Injectable()
export class AuthGuard implements CanActivate {
    currentUser: UserInfo;
    constructor(private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    canActivate() {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

    canActivateChild() {
        if (localStorage.getItem('isLoggedin')) {
            // if(this.currentUser.user.title_role != "administrator"){
            if (true) {
                console.log(this.currentUser.user.title_role);
                myFunction(this.currentUser.user.title_role);
                return;
            }
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
