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
    source = { pic: "assets/profile-user.png", title: "Login", btnText: "Login", text: "Don't have an account? ", link: "Register" };
    data = [
        { controlName: "email", type: "text", label: "Email", dim: "col-md-12" },
        { controlName: "password", type: "password", label: "Password", dim: "col-md-12" }
    ]

    constructor(private router: Router,
        // private authen: AuthenticationService, 
        private formLog: FormBuilder) { }

    ngOnInit(): void {
        if (localStorage.getItem('currentUser')) {
            this.router.navigate(['/home']);
        }
        this.loginForm = this.formLog.group({
            'password': ['', Validators.required],
            'email': ['', Validators.compose([Validators.required])]
        });
    }

    navigateToRegister() {
        this.router.navigate(['/user-registration']);
    }

    navigateToForgot() {
        this.router.navigate(['/forgot-password']);
    }

    onSubmit() {
        console.log(this.loginForm.value)
    }
    get f() {
        return this.loginForm.controls;
    }

}
