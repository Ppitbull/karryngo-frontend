import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/service/user/user.service';
// import { AuthService } from 'app/shared/services/auth.service';
// import { UserService } from 'app/shared/services/user.service';
// import { User } from 'app/shared/services/user';


declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // user: any[];
  // users: any[];

  userEmail: string = this.userData.getUserInformations().field_email;
  firstName: string = this.userData.getUserInformations().field_firstname;
  lastName: string = this.userData.getUserInformations().field_lastname;
  name = this.firstName + ' ' + this.lastName;
  userAddress = '';
  userCity: string = this.userData.getUserInformations().field_city;
  userCountry: string = this.userData.getUserInformations().field_country;
  userZip  = this.userData.getUserInformations().field_zip;
  userPhone: string = this.userData.getUserInformations().field_phone;
  userCoverImg: string = 'assets/img/userCoverImg1.png';
  userProfileImg: string = '../../../../assets/img/user_image.png';
  userName: string = '';
  userLabel: string = 'if we are satisfied with our present, we have no future.';

  message: string = '\<b>Error\</b>\<br>Someone was not going. This option is not available.';

  constructor(
    // private userService: UserService,
    // public authService: AuthService,
    private userData: UserService,
    public router: Router,
    public ngZone: NgZone) {

    // this.user["name"] = `${this.userService.user.firstName} ${this.userService.user.lastName}`;

  }

  ngOnInit() {
    console.log(this.userData.getUserInformations().field_firstname)
    // this.users = [this.userService.user];
  }

  showNotification(from, align, colortype, icon, text) {

    $.notify({
      icon: icon,
      message: text
    }, {
      type: colortype,
      timer: 1000,
      placement: {
        from: from,
        align: align
      }
    });
  }

}
