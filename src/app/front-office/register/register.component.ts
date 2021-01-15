import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    submitted: boolean;
    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
        // private authen: AuthenticationService,
        private router: Router,
        private formLog: FormBuilder) { }

    ngOnInit(): void {
        if (localStorage.getItem('currentUser')) {
            this.router.navigate(['/home']);
        }
        this.registerForm = this.formLog.group({
            'firstname': ['', Validators.required],
            'surename': ['', Validators.required],
            'username': ['', Validators.required],
            'language': ['', Validators.required],
            'agree': ['', Validators.required],
            'country': ['', Validators.required],
            'acctype': ['', Validators.required],
            'city': ['', Validators.required],
            'password': ['', Validators.required],
            'password2': ['', Validators.required],
            'email': ['', Validators.compose([Validators.required])],

        });
    }

    navigateToLogin() {
        this.router.navigate(['/login']);
    }

    goToActivate() {
        this.router.navigate(['/account-activation']);
    }

    /////


    onSubmit() {
        console.log(this.registerForm.value)
    }
    get f() {
        return this.registerForm.controls;
    }

}
