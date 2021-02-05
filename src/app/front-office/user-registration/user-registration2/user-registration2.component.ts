import { Component, OnInit, ViewChildren, OnDestroy } from '@angular/core';
import { CollapseComponent } from 'angular-bootstrap-md';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneraleService } from '../../../shared/service/generale/generale.service';
import { ApiService } from '../../../shared/service/api/api.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/service/user/user.service';
import { ParametersService } from '../../../shared/parameters/parameters.service';

@Component({
  selector: 'app-user-registration2',
  templateUrl: './user-registration2.component.html',
  styleUrls: ['./user-registration2.component.scss']
})
export class UserRegistration2Component implements OnInit, OnDestroy {

  loading: boolean;
  formUser2: FormGroup;
  countries: string[] = [];
  allCountriesCities: any[] = [];
  selectedCountry: 'null';
  cities: string[];
  constructor(
    private generalService: GeneraleService,
    private api: ApiService,
    private fb: FormBuilder,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.initFormUser2();
    this.initCountries();
    this.initCities();
    this.onSelect(this.selectedCountry);
  }


  // chrgement des ville en fonction du pays
  onSelect(countryName: string) {
    this.allCountriesCities.forEach(data => {
      if (data.countryName === countryName) {
        this.cities = data.cities;
      }
    });
  }

  // initialisation des nom des pays
  initCountries() {
    let data;
    let name;
    this.generalService.getAllCountriesEn().then(cou => {
      cou.data.forEach(element => {
        name = element.attributes.name;
        // ajout des pays
        this.countries.push(name);

        // ajout des pays et des ville
        data = {
          countryName: name,
          cities: this.generalService.citiesOfCountry(name)
        };
        this.allCountriesCities.push(data);

      });
    }).catch(error => {
      this.countries = [];
      this.allCountriesCities = [];
    });
  }

  // initialisation du formulaire
  initFormUser2() {
    this.formUser2 = this.fb.group({
      yes: [false, Validators.required],
      companyName: ['', Validators.required],
      companyRegistrationNumber: ['', Validators.required],
      companyImpExpCode: ['', Validators.required],
      companyWebsite: ['', Validators.required],
      companyEmail: ['', Validators.required],
      companyPhone: ['', Validators.required],
      companyCountry: ['null', Validators.required],
      companyCity: ['null', Validators.required],
      companyAddress1: ['', Validators.required],
      companyAddress2: ['', Validators.required]
    });
  }

  // recupere et affiche les ville du systeme
  initCities() { }

  ngOnDestroy(): void {
    const choise = this.formUser2.controls.yes.value;
    console.log(choise);
    if (true) {
      UserService.currentUser.field_do_you_hire_as_business = 'Yes';
      UserService.currentUser.field_company_name = this.formUser2.controls.companyName.value;
      UserService.currentUser.field_company_registration_numbe = this.formUser2.controls.companyRegistrationNumber.value;
      UserService.currentUser.field_company_import_export_code = this.formUser2.controls.companyImpExpCode.value;
      UserService.currentUser.field_company_website = this.formUser2.controls.companyWebsite.value;
      UserService.currentUser.field_country_company = this.formUser2.controls.companyCountry.value;
      UserService.currentUser.field_city_company = this.formUser2.controls.companyCity.value;
      UserService.currentUser.field_company_email = this.formUser2.controls.companyEmail.value;
      UserService.currentUser.field_company_phone = this.formUser2.controls.companyPhone.value;
      UserService.currentUser.field_address_1_company = this.formUser2.controls.companyAddress1.value;
      UserService.currentUser.field_address_2_company = this.formUser2.controls.companyAddress2.value;
    } else {
      UserService.currentUser.field_do_you_hire_as_business = 'No';
    }
    console.log(UserService.currentUser);
  }

}
