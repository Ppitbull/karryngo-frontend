import { Component } from '@angular/core';
declare var $: any;

@Component({
  templateUrl: 'vehiculs.component.html',
  styleUrls : ['vehicles.component.scss']
})
export class VehiculsComponent {

  constructor() { }

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
