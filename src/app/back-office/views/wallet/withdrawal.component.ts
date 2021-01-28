import { Component, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent {

  @ViewChild('myModal') public myModal: ModalDirective;
}
