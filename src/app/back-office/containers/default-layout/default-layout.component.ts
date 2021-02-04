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
  public userName: string = 'Flambel SANOU';
  private balence: number = 50000;
  private currency: string = 'FCFA';

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
