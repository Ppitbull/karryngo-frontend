import { Component, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

declare var $: any;

@Component({
  templateUrl: 'withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent {
  balence: string = '000';

  @ViewChild('myModal') public myModal: ModalDirective;

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
