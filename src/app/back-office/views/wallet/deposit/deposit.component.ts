import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  templateUrl: 'deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})

export class DepositComponent implements OnInit {
  balence: number = 50000;

  constructor() {}


  ngOnInit(): void {
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
