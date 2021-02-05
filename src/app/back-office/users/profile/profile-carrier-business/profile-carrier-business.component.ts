import { Component, NgZone, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import * as $ from 'jquery';
import { GeneraleService } from '../../../../shared/service/generale/generale.service';
import { Router } from '@angular/router';

export interface ServiceOffered {
  name: string;
  vehicules: Vehicule[];
}

export interface City {
  name: string;
}

export interface DocumentPerso {
  name: string;
  description: string;
}



export interface Country {
  uuid: string;
  name: string;
  cities: City[];
}

export interface ItemeFile {
  idVehicule: number;
  id: number;
  name: string;
}

export interface Vehicule {
  id: number;
  name: string;
  saveIsVisible: boolean;
  itemFiles: ItemeFile[];
  /* make: string;
  model: string;
  year: string;
  mileage: string;
  typeService: string;
  files: any[]; */
}

@Component({
  selector: 'app-profile-carrier-business',
  templateUrl: './profile-carrier-business.component.html',
  styleUrls: ['./profile-carrier-business.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileCarrierBusinessComponent implements OnInit {
// user: any[];
  // users: any[];

  firstName: string = 'Flambel';
  lastName: string = 'SANOU';
  name = this.firstName + ' ' + this.lastName;
  userAddress: string = 'Mandja';
  userCity: string = 'Bangangte';
  userCountry: string = 'Cameroon';
  userZip: string = '0000';
  userPhone: string = '(+237) 691 224 472';
  userCoverImg: string = 'assets/img/userCoverImg1.png';
  userProfileImg: string = '../../../../assets/img/user_image.png';
  userName: string = 'Flambel55';
  userEmail: string = 'flambel55@gmail.com';
  userLabel: string = 'Trust me and your parcels will be delivered on time.';

  message: string = '\<b>Error\</b>\<br>Someone was not going. This option is not available.';

  constructor(
    // private userService: UserService,
    // public authService: AuthService,
    public router: Router,
    public ngZone: NgZone) {
    // this.user["name"] = `${this.userService.user.firstName} ${this.userService.user.lastName}`;

  }

  ngOnInit() {
    // this.users = [this.userService.user];
  }


}
