import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  templateUrl: 'vehicles.component.html',
  styleUrls: ['vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicleForm: FormGroup;

  
  constructor(private router: Router,
    private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.vehicleForm = this.formBuilder.group({
      'field_brand': ['', Validators.required],
      'field_model': ['', Validators.required],
      'field_type': ['', Validators.required],
      'field_numberSeat': ['', Validators.required],
      'field_fieles': ['', Validators.required],
      'field_description': ['', Validators.required],
    });

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
