import {Component} from '@angular/core';
import { UserService } from '../../../shared/service/user/user.service';
import { AuthService } from '../../../shared/service/auth/auth.service';
import { navItems } from '../../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  unreadMessageList
  // tslint:disable-next-line:max-line-length
  public userName: string = this.userService.getUserInformations().field_lastname + ' ' + this.userService.getUserInformations().field_lastname;
  private balence: string = ' 000 ';
  private currency: string = 'XOF';

  today: number = Date.now();

  constructor(private userService: UserService,
   private authService: AuthService) {
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logOut() {
    this.authService.logOut();
  }
}
