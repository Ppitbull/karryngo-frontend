import {Component, NgZone, OnInit} from '@angular/core';
import { UserService } from '../../../shared/service/user/user.service';
import { AuthService } from '../../../shared/service/auth/auth.service';
import { navItems } from '../../../_nav';
import { Message } from '../../../shared/entity/chat';
import { ChatService } from '../../../shared/service/back-office/chat.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;
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
  public userName: string = this.userService.getUserInformations().field_firstname + ' ' + this.userService.getUserInformations().field_lastname;
  private balence: string = ' 000 ';
  private currency: string = 'XOF';
  closeResult = '';

  today: number = Date.now();

  constructor(private userService: UserService,
   private authService: AuthService,
   private chatService: ChatService,
   private modalService: NgbModal) {
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

  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
