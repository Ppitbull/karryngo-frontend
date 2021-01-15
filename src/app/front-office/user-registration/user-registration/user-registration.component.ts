import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/service/user/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  title = 'User registration ';
  titleUser: string;
  user1 = true;
  user2 = false;
  user3 = false;
  visible = true;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    UserService.isUser = true;
    this.initPage();
  }

  // init the user registration
  initPage() {
    if (this.user1) {
      this.titleUser = this.title + '1/3';
      this.visible = true;
    } else if (this.user2) {
      this.titleUser = this.title + '2/3';
      this.visible = true;
    } else if (this.user3) {
      this.titleUser = this.title + '3/3';
      this.visible = false;
    }
  }

  next() {
    if (this.user1) {
      this.user1 = false;
      this.user2 = true;
      this.user3 = false;
    } else if (this.user2) {
      this.user1 = false;
      this.user2 = false;
      this.user3 = true;
    }
    this.initPage();
  }
  createAccount() {
    this.userService.userAccountCreation(UserService.userEncour);
    //this.userService.loginUser(UserService.userEncour.name, UserService.userEncour.pass);
    this.toastr.success('You have been successfully Register!');
    this.router.navigate(['login']);
  }
}
