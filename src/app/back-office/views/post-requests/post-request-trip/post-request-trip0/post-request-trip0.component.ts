import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripService } from '../../../../../shared/service/back-office/trip.service';

@Component({
  selector: 'app-post-request-trip0',
  templateUrl: './post-request-trip0.component.html',
  styleUrls: ['./post-request-trip0.component.scss']
})
export class PostRequestTrip0Component implements OnInit {

  submitted: boolean;
  tripForm: FormGroup;
  owner: string = 'Flambel SANOU';
  status: string = 'Draft';
  title = 'New trip request ';
  titleUser: string;
  user1 = true;
  user2 = false;
  user3 = false;
  visible = true;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private tripService: TripService) { }

  ngOnInit(): void {
    this.initPage();
    this.tripForm = this.formBuilder.group({
      'field_status': [this.status, ],
      'field_price': ['', Validators.required],
      'field_countryStart': ['', Validators.required],
      'field_cityStart': ['', Validators.required],
      'field_countryArrived': ['', Validators.required],
      'field_cityArrived': ['', Validators.required],
      'field_delaate': ['', Validators.required],
      'field_recipientName': ['', Validators.required],
      'field_recipientContact': ['', Validators.required],
      'field_typePartSupply': ['', Validators.required],
      'field_typeof': ['', Validators.required],
      'field_numberTrip': ['', Validators.required],
      'field_vehicleType': ['', ],
      'field_numPlace': ['', ],
      'field_widhtTrip': ['', ],
      'field_weightTrip': ['', ],
      'field_lengthTrip': ['', ],
      'field_descriptionTrip': ['', ]
    });

  }

  pushTripForm() {
    console.log(TripService.currentTrip);
    this.tripService.tripCreation(TripService.currentTrip);
  }


  get f() {
    return this.tripForm.controls;
  }

  // init the user registration
  initPage() {
    if (this.user1) {
      this.titleUser = this.title + '1/3';
      this.visible = true;
    } else if (this.user2) {
      this.titleUser = this.title + '2/3';
      this.visible = true;
    } else if (this.user3) {
      this.titleUser = this.title + '3/3';
      this.visible = false;
    }
  }

  next() {
    if (this.user1) {
      this.user1 = false;
      this.user2 = true;
      this.user3 = false;
    } else if (this.user2) {
      this.user1 = false;
      this.user2 = false;
      this.user3 = true;
    }
    this.initPage();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    TripService.currentTrip.field_price = this.tripForm.controls.field_price?.value;
    TripService.currentTrip.field_countryStart = this.tripForm.controls.field_countryStart?.value;
    TripService.currentTrip.field_cityStart = this.tripForm.controls.field_cityStart?.value;
    TripService.currentTrip.field_latStart = this.tripForm.controls.field_latStart?.value;
    TripService.currentTrip.field_longStart = this.tripForm.controls.field_longStart?.value;
    TripService.currentTrip.field_countryArrived = this.tripForm.controls.field_countryArrived?.value;
    TripService.currentTrip.field_cityArrived = this.tripForm.controls.field_cityArrived?.value;
    TripService.currentTrip.field_latArrived = this.tripForm.controls.field_latArrived?.value;
    TripService.currentTrip.field_longArrived = this.tripForm.controls.field_longArrived?.value;
    TripService.currentTrip.field_delayDate = this.tripForm.controls.field_delayDate?.value;
    TripService.currentTrip.field_typeof = this.tripForm.controls.field_typeof?.value;
    TripService.currentTrip.field_vehicleType = this.tripForm.controls.field_vehicleType?.value;
    TripService.currentTrip.field_numPlace = this.tripForm.controls.field_numPlace?.value;

    // console.log(TripService.currentTrip);
    this.pushTripForm();
  }

}
