import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/service/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    submitted: boolean;
    loginForm: FormGroup;



    constructor(
        private router: Router,
        private authen: AuthService,
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
        this.authen.authLogin(this.loginForm.controls.field_email.value, this.loginForm.controls.field_password.value);
    }
    get f() {
        return this.loginForm.controls;
    }

}
