import {Component} from '@angular/core';
import { UserService } from '../../../shared/service/user/user.service';
import { navItems } from '../../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public userName: string = this.userService.getUserInformations().field_lastname + ' ' + this.userService.getUserInformations().field_lastname;
  private balence: string = ' 000 ';
  private currency: string = 'XOF';

  today: number = Date.now();

  constructor(private userService: UserService) {
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logOut() {
    this.userService.logOut();
  }
}
