import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/service/user/user.service';

@Component({
  selector: 'app-register-carrier-shipper-transporter',
  templateUrl: './register-carrier-shipper-transporter.component.html',
  styleUrls: ['./register-carrier-shipper-transporter.component.scss']
})
export class RegisterCarrierShipperTransporterComponent implements OnInit {

  title = 'Register as Carrier/Shipper/Transporter ';
  titleUser: string;
  user1 = true;
  user2 = false;
  user3 = false;
  visible = true;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    UserService.isUser = false;
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
  }

}
