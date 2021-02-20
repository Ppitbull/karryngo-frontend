import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/service/user/user.service';
import { AuthService } from '../../shared/service/auth/auth.service';
import { User } from '../../shared/entity/user';
// import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public static currentUser: User = new User();
    submitted: boolean;
    registerForm: FormGroup;
    registrationMessage:String="";
    waitingRegistration:boolean=false;
    messageColor:String="";

    constructor(private formBuilder: FormBuilder,
        private auth: AuthService,
        private userService:UserService,
        private router: Router,
        private formLog: FormBuilder) { }

    ngOnInit(): void {
        if (localStorage.getItem('currentUser')) {
            this.router.navigate(['/home']);
        }
        this.registerForm = this.formLog.group({
            'field_firstname': ['', Validators.required],
            'field_surname': ['', Validators.required],
            'field_username': ['', Validators.required],
            'field_language': ['', Validators.required],
            'user_agree': ['', Validators.required],
            'field_country': ['', Validators.required],
            'field_phone': ['', Validators.required],
            'field_accontType': ['', ],
            'field_city': ['', Validators.required],
            'field_address': ['', ],
            'field_password': ['', Validators.required],
            'field_password2': ['', Validators.required],
            'field_email': ['', Validators.compose([Validators.required])],

        });
    }

    navigateToLogin() {
        this.router.navigate(['login']);
    }

    navigateToVerifyEmail() {
        this.router.navigate(['verify-email-address']);
    }

    /////

    setFormData() {
        this.userService.currentUser.field_firstName = this.registerForm.controls.field_firstname?.value;
        this.userService.currentUser.field_surName = this.registerForm.controls.field_surname?.value;
        this.userService.currentUser.field_email = this.registerForm.controls.field_email?.value;
        this.userService.currentUser.field_password = this.registerForm.controls.field_password?.value;
        this.userService.currentUser.field_accountType = this.registerForm.controls.field_accontType?.value;
        this.userService.currentUser.field_language = this.registerForm.controls.field_language?.value;
        this.userService.currentUser.field_country = this.registerForm.controls.field_country?.value;
        this.userService.currentUser.field_address = this.registerForm.controls.field_address?.value;
        this.userService.currentUser.field_city = this.registerForm.controls.field_city?.value;
        this.userService.currentUser.field_userName = this.registerForm.controls.field_username?.value;
        this.userService.currentUser.field_phone = this.registerForm.controls.field_phone?.value;

    }

    onSubmit() {
        this.setFormData();
        this.waitingRegistration=true;
        this.auth.createAccount(this.userService.currentUser)
        .then((result)=>{
            this.waitingRegistration=false;
            this.messageColor="green";
            this.registrationMessage="Success";
            setTimeout(() => {
                this.router.navigate(['login']);
            }, 300);
        })
        .catch((error)=>
        {
            this.waitingRegistration=false;
            this.messageColor="red";
            this.registrationMessage=error.message;
        })
        // console.log(this.auth.registResult);
        // if (this.auth.registResult == true ){
        //     console.log('You registration is OK! ');
        // } else {
        //     console.log('An error, plrease check your request');
        // }
    }
    get f() {
        return this.registerForm.controls;
    }

}
