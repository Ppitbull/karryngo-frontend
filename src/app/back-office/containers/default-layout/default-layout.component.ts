import {Component, OnInit} from '@angular/core';
import { UserService } from '../../../shared/service/user/user.service';
import { AuthService } from '../../../shared/service/auth/auth.service';
import { navItems } from '../../../_nav';
import { Message } from '../../../shared/entity/chat';
import { ChatService } from '../../../shared/service/back-office/chat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit{
  public sidebarMinimized = false;
  public navItems = navItems;
  unreadMessageList:Message[]=[];
  // tslint:disable-next-line:max-line-length
  public userName: string = this.userService.getUserInformations().field_lastname + ' ' + this.userService.getUserInformations().field_lastname;
  private balence: string = ' 000 ';
  private currency: string = 'XOF';

  today: number = Date.now();

  constructor(private userService: UserService,
   private authService: AuthService,
   private chatService: ChatService) {
  }
  ngOnInit(): void {
    this.chatService.listMessageUnreadSubject.subscribe((listMessage)=>this.unreadMessageList=listMessage);
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logOut() {
    this.authService.logOut();
  }
}
