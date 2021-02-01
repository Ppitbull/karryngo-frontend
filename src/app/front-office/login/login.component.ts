import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    submitted: boolean;
    loginForm: FormGroup;
   

    constructor(private router: Router,
        // private authen: AuthenticationService, 
        private formLog: FormBuilder) { }

    ngOnInit(): void {
        if (localStorage.getItem('currentUser')) {
            this.router.navigate(['/home']);
        }
        this.loginForm = this.formLog.group({
            'field_password': ['', Validators.required],
            'field_email': ['', Validators.compose([Validators.required])]
        });
    }

    navigateToRegister() {
        this.router.navigate(['/registration']);
    }

    navigateToForgot() {
        this.router.navigate(['/forgot-password']);
    }

    onSubmit() {
        console.log(this.loginForm.value);
    }
    get f() {
        return this.loginForm.controls;
    }

}
