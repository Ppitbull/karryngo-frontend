import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PackageService } from '../../../../shared/service/back-office/package.service';
declare var $: any;

@Component({
  selector: 'app-post-request-trips',
  templateUrl: './post-request-trips.component.html',
  styleUrls: ['./post-request-trips.component.scss']
})
export class PostRequestTripsComponent implements OnInit {

  submitted: boolean;
  packageForm: FormGroup;
  owner: string = 'Flambel SANOU';
  status: string = 'Draft';

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private pacakgeService: PackageService) { }

  ngOnInit(): void {
    this.packageForm = this.formBuilder.group({
      'field_owner': [this.owner, Validators.required],
      'field_status': [this.status, Validators.required],
      'field_countryStart': ['', Validators.required],
      'field_name': ['', Validators.required],
      'field_cityStart': ['', Validators.required],
      'field_countryArrived': ['', Validators.required],
      'field_cityArrived': ['', Validators.required],
      'field_isWeak': ['', Validators.required],
      'field_isUrgent': ['', Validators.required],
      'field_delayDate': ['', Validators.required],
      'field_recipientName': ['', Validators.required],
      'field_recipientContact': ['', Validators.required],
      'field_typePartSupply': ['', Validators.required],
      'field_typeof': ['', Validators.required],
      'field_vehicleType': ['', Validators.required],
      'field_heightPackages': ['', Validators.required],
      'field_widhtPackage': ['', Validators.required],
      'field_weightPackage': ['', Validators.required],
      'field_lengthPackage': ['', Validators.required],
      'field_numberPackage': ['', Validators.required],
      'field_descriptionPackage': ['', Validators.required]
    });

  }

  setFormData() {
    PackageService.currentPackage.field_owner = this.packageForm.controls.field_owner?.value;
    PackageService.currentPackage.field_status = this.packageForm.controls.field_status?.value;
    PackageService.currentPackage.field_name = this.packageForm.controls.field_name?.value;
    PackageService.currentPackage.field_countryStart = this.packageForm.controls.field_countryStart?.value;
    PackageService.currentPackage.field_cityStart = this.packageForm.controls.field_cityStart?.value;
    PackageService.currentPackage.field_latStart = this.packageForm.controls.field_latStart?.value;
    PackageService.currentPackage.field_longStart = this.packageForm.controls.field_longStart?.value;
    PackageService.currentPackage.field_countryArrived = this.packageForm.controls.field_countryArrived?.value;
    PackageService.currentPackage.field_cityArrived = this.packageForm.controls.field_cityArrived?.value;
    PackageService.currentPackage.field_latArrived = this.packageForm.controls.field_latArrived?.value;
    PackageService.currentPackage.field_longArrived = this.packageForm.controls.field_longArrived?.value;
    PackageService.currentPackage.field_isWeak = this.packageForm.controls.field_isWeak?.value;
    PackageService.currentPackage.field_isUrgent = this.packageForm.controls.field_isUrgent?.value;
    PackageService.currentPackage.field_delayDate = this.packageForm.controls.field_delayDate?.value;
    PackageService.currentPackage.field_recipientName = this.packageForm.controls.field_recipientName?.value;
    PackageService.currentPackage.field_recipientContact = this.packageForm.controls.field_recipientContact?.value;
    PackageService.currentPackage.field_typePartSupply = this.packageForm.controls.field_typePartSupply?.value;
    PackageService.currentPackage.field_typeof = this.packageForm.controls.field_typeof?.value;
    PackageService.currentPackage.field_vehicleType = this.packageForm.controls.field_vehicleType?.value;
    PackageService.currentPackage.field_heightPackages = this.packageForm.controls.field_heightPackages?.value;
    PackageService.currentPackage.field_widhtPackage = this.packageForm.controls.field_widhtPackage?.value;
    PackageService.currentPackage.field_weightPackage = this.packageForm.controls.field_weightPackage?.value;
    PackageService.currentPackage.field_lengthPackage = this.packageForm.controls.field_lengthPackage?.value;
    PackageService.currentPackage.field_numberPackage = this.packageForm.controls.field_numberPackage?.value;
    PackageService.currentPackage.field_image = this.packageForm.controls.field_image?.value;
    PackageService.currentPackage.field_descriptionPackage = this.packageForm.controls.field_descriptionPackage?.value;

}

  onSubmit() {
    this.setFormData();
    console.log(this.packageForm.value);
    console.log(PackageService.currentPackage);
    this.pacakgeService.packageCreation(PackageService.currentPackage);
  }
  get f() {
    return this.packageForm.controls;
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
